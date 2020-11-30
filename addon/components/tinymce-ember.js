import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';
import { next, scheduleOnce } from '@ember/runloop';

import tinymce from 'tinymce/tinymce';

const DEFAULT_CONFIG = {
  base_url: 'tinymce',
  theme: 'silver'
};

export default Component.extend({
  customBoundEvents: null,
  customEvents: null,

  content: '',
  currentContent: '',
  currentFormattedContent: '',

  delayEditorChange: false,

  editor: null,
  editorEvents: 'change keyup setcontent',
  editorId: null,
  editorName: 'tinymce',

  init() {
    this._super(...arguments);

    // Generate and set editor's id for textarea
    const EditorId = `${this.editorName}-${guidFor(this)}`
      .replaceAll(/[^a-z0-9]/gi, '-')
      .toLowerCase();
    this.setProperties({
      customEvents: this.customEvents ?? [],
      customBoundEvents: [],
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

      if (this.customBoundEvents.length) {
        this.unbindEditorCustomEvents(Editor);
      }

      if (this.customEvents.length) {
        this.bindEditorCustomEvents(Editor);
      }

      if (this.content !== this.currentContent) {
        this.setEditorContent(this.content);
      }
    }
  },

  willDestroyElement() {
    this._super(...arguments);

    const Editor = this.editor;
    if (Editor) {
      Editor.off(this.editorEvents, this.handleEditorChange.bind(this));

      if (this.customBoundEvents.length) {
        this.unbindEditorCustomEvents(Editor);
      }

      Editor.remove();
    }
  },

  bindEditorCustomEvents(Editor) {
    this.customEvents.forEach(event => {
      this.customBoundEvents.push(event);
      Editor.on(event.name, event.handler);
    });
  },

  unbindEditorCustomEvents(Editor) {
    this.customBoundEvents.forEach(event => {
      Editor.off(event.name, event.handler);
    });
  },

  /*
   * Method to keep track on raw & formatted (by editor) html
   */
  setEditorContent(content) {
    const Editor = this.editor;
    if (Editor) {
      this.delayEditorChange = true;
      Editor.setContent(content);
      this.delayEditorChange = false;
      let formattedContent = Editor.getContent({format: 'html'});
      this.setProperties({
        currentFormattedContent: formattedContent,
        currentContent: content
      })
    }
  },

  onHandleEditorChange(Editor) {
    const NewContent = Editor.getContent({format: 'html'});

    if (this.currentFormattedContent !== NewContent) {
      this.setProperties({
        currentFormattedContent: NewContent,
        currentContent: NewContent
      })

      if (typeof this.onEditorContentChange === 'function') {
        this.onEditorContentChange(NewContent ?? '', Editor);
      }
    }
  },

  handleEditorChange() {
    const Editor = this.editor;
    if (Editor) {
      if(this.delayEditorChange) {
        /*
         * Editor.setContent is immediately triggered by setEditorContent method
         * Need setEditorContent method to run commpletely before triggering the onEditorContentChange function
         */
        next(() => {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          this.onHandleEditorChange(Editor);
        });
      } else {
        this.onHandleEditorChange(Editor);
      }
    }
  },

  handleEditorInit() {
    const Editor = this.editor;
    if (Editor) {
      this.setEditorContent(this.content);

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
      ...this.config ?? DEFAULT_CONFIG,
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
