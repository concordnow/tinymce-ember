import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  editor: null,
  editorContent: '',
  editorId: null,
  editorName: 'tinymce',

  init() {
    this._super(...arguments);

    // Generate and set editor's id for textarea
    const EditorId = `${this.editorName}-${guidFor(this)}`
      .replaceAll(/[^a-z0-9]/gi, '-')
      .toLowerCase();
    this.set('editorId', EditorId);
  },

  didInsertElement() {
    this._super(...arguments);

    let type = this.config.inline ? ((typeof this.inlineType === 'string' && this.inlineType) || 'div') : 'textarea';
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
    if (Editor?.initialized) {
      Editor.setMode(this.disabled ? 'readonly' : 'design');
    }
  },

  willDestroyElement() {
    this._super(...arguments);

    const Editor = this.editor;
    if (Editor) {
      Editor.off('change keyup setcontent', this.handleEditorChange.bind(this));

      if (this.customEvents) {
        this.customEvents.forEach(event => {
          Editor.off(event.name, event.handler);
        });
      }

      Editor.remove();
    }
  },

  handleEditorChange() {
    const Editor = this.editor;
    if (Editor) {
      const NewContent = Editor.getContent({format: 'html'});

      if (this.editorContent !== NewContent) {
        this.set('editorContent', NewContent);
      }
    }
  },

  handleEditorInit() {
    const Editor = this.editor;
    if (Editor) {
      Editor.setContent(this.editorContent);

      Editor.on('change keyup setcontent', this.handleEditorChange.bind(this));

      if (this.customEvents) {
        this.customEvents.forEach(event => {
          Editor.on(event.name, event.handler);
        });
      }
    }
  },

  initEditor() {
    // Importing tinymce module in your web page will run an IIFE that attaches tinymce to the window
    if (!window.tinymce) {
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
      ...this.config,
      ...domElement,
      setup: editor => {
        this.set('editor', editor);
        editor.on('init', this.handleEditorInit.bind(this));

        if (this.config.setup && typeof this.config.setup === 'function') {
          this.config.setup(editor);
        }
      }
    }

    window.tinymce.init(Config);
  }
});
