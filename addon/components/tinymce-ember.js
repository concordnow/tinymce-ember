import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';
import { scheduleOnce } from '@ember/runloop';

import tinymce from 'tinymce/tinymce';

const DEFAULT_CONFIG = {
  base_url: 'tinymce',
  theme: 'silver'
};

export default Component.extend({
  editor: null,
  editorContent: '',
  editorCurrentContent: '',
  editorCustomEvents: null,
  editorDefaultConfig: null,
  editorEvents: 'change keyup setcontent',
  editorId: null,
  editorName: 'tinymce',
  editorTimeDebounce: 500,

  customEvents: null,

  init() {
    this._super(...arguments);

    // Generate and set editor's id for textarea
    const EditorId = `${this.editorName}-${guidFor(this)}`
      .replaceAll(/[^a-z0-9]/gi, '-')
      .toLowerCase();
    this.setProperties({
      customEvents: this.customEvents ?? [],
      editorCustomEvents: [],
      editorDefaultConfig: DEFAULT_CONFIG,
      editorId: EditorId
    });
  },

  didInsertElement() {
    this._super(...arguments);

    let type = this.config?.inline ? ((typeof this.inlineType === 'string' && this.inlineType) || 'div') : 'textarea';
    let block = document.createElement(type);

    block.setAttribute('id', this.editorId);
    if (type === 'textarea') {
      block.setAttribute('name', this.editorName);
    }

    this.element.append(block);

    // Run editor initialization once page is rendered
    scheduleOnce('afterRender', this, this.initEditor);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const Editor = this.editor;
    if (Editor) {
      Editor.setMode(this.disabled ? 'readonly' : 'design');

      if (this.editorCustomEvents.length) {
        this.unbindEditorCustomEvents(Editor);
      }

      if (this.customEvents.length) {
        this.bindEditorCustomEvents(Editor);
      }

      this.set('editorCurrentContent', (this.editorCurrentContent ?? Editor.getContent({format: 'html'})));

      if (this.editorContent !== this.editorCurrentContent) {
        Editor.setContent(this.editorContent);
      }
    }
  },

  willDestroyElement() {
    this._super(...arguments);

    const Editor = this.editor;
    if (Editor) {
      Editor.off(this.editorEvents, this.handleEditorChange.bind(this));

      if (this.editorCustomEvents.length) {
        this.unbindEditorCustomEvents(Editor);
      }

      Editor.remove();
    }
  },

  bindEditorCustomEvents(Editor) {
    this.customEvents.forEach(event => {
      this.editorCustomEvents.push(event);
      Editor.on(event.name, event.handler);
    });
  },

  unbindEditorCustomEvents(Editor) {
    this.editorCustomEvents.forEach(event => {
      Editor.off(event.name, event.handler);
    });
  },

  handleEditorChange() {
    const Editor = this.editor;
    if (Editor) {
      const NewContent = Editor.getContent({format: 'html'});

      if (this.editorCurrentContent !== NewContent) {
        this.set('editorCurrentContent', NewContent);

        if (typeof this.onEditorContentChange === 'function') {
          this.onEditorContentChange(NewContent ?? '', Editor);
        }
      }
    }
  },

  handleEditorInit() {
    const Editor = this.editor;
    if (Editor) {
      Editor.setContent(this.editorContent);
      this.set('editorCurrentContent', this.editorContent);

      if (typeof this.onEditorContentChange === 'function') {
        Editor.on(this.editorEvents, this.handleEditorChange.bind(this));
      }

      if (this.customEvents) {
        this.bindEditorCustomEvents(Editor);
      }
    }
  },

  initEditor() {
    // Importing tinymce module in your web page will run an IIFE that attaches tinymce to the window
    let Editor = tinymce || window.tinymce;
    if (!Editor) {
      throw new Error('TinyMCE hasn\'t been attached to the window hence not imported in your application.');
    }

    let domElement = {
      selector: `#${this.editorId}`,
    };

    if (this.target) {
      domElement.target = this.target;
      domElement.selector = undefined;
    }
    // Extend default and custom configurations
    const Config = {
      ...this.config ?? this.editorDefaultConfig,
      ...domElement,
      setup: editor => {
        this.set('editor', editor);
        editor.on('init', this.handleEditorInit.bind(this));

        if (this.config && this.config.setup && typeof this.config.setup === 'function') {
          this.config.setup(editor);
        }
      }
    }

    Editor.init(Config);
  }
});
