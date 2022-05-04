import Modifier from 'ember-modifier';
import { begin, end, next } from '@ember/runloop';

import { tinymce } from '../index';

export default class EditorModifier extends Modifier {
  // Internal list of events that have been bound to the editor
  customBoundEvents = [];

  // Internal string properties used to determined if editor's content has changed
  currentContent = '';

  currentFormattedContent = '';

  // Internal boolean property used as a flag to signal end of editor's setContent job
  delayEditorChange = false;

  // Instance of the active editor once initialized
  editor = null;

  /**
    List of events given to the editor

    Type of event should be

   ```js
    {
       name: string,
       handler: function
    }
   ```
    @argument customEvents
    @type null|[]
    @default null
   */
  get customEvents() {
    return this.args.named.customEvents ?? [];
  }

  /**
    A given string to be set as editor's content

    @argument content
    @type string
    @default ''
   */
  get content() {
    return this.args.named.content ?? '';
  }

  /**
    A given string representing default bound editor's events

    Each of those events will call an `onEditorContentChange` function if given as parameter

    @argument editorEvents
    @type string
    @default 'change keyup setcontent'
   */
  get editorEvents() {
    return this.args.named.editorEvents ?? 'change keyup setcontent';
  }

  didInstall() {
    begin();
    const Config = {
      ...(this.args.named.config ?? {}),
      ...{ target: this.element },
      setup: (editor) => {
        this.editor = editor;

        this.args.named.config?.setup?.(editor);

        editor.on('init', this.handleEditorInit.bind(this));
        this.setMode(this.args.named.disabled ? 'readonly' : 'design');
      },
    };

    tinymce.init(Config);
  }

  didReceiveArguments() {
    const Editor = this.editor;
    if (Editor) {
      this.setMode(this.args.named.disabled ? 'readonly' : 'design');

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
  }

  willDestroy() {
    const Editor = this.editor;
    if (Editor) {
      Editor.off('init', this.handleEditorInit.bind(this));
      Editor.off(this.editorEvents, this.handleEditorChange.bind(this));

      if (this.customBoundEvents.length) {
        this.unbindEditorCustomEvents(Editor);
      }

      Editor.remove();
    }
  }

  setMode(mode) {
    const Editor = this.editor;
    if (Editor.setMode) {
      // Tinymce v5
      Editor.setMode(mode);
    } else {
      // Tinymce v6
      Editor.mode.set(mode);
    }
  }

  handleEditorInit() {
    const Editor = this.editor;

    if (Editor) {
      this.setEditorContent(this.content);

      Editor.on(this.editorEvents, this.handleEditorChange.bind(this));

      if (this.customEvents) {
        this.bindEditorCustomEvents(Editor);
      }
    }
    end();
  }

  handleEditorChange() {
    const Editor = this.editor;
    if (Editor) {
      if (this.delayEditorChange) {
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
  }

  onHandleEditorChange(Editor) {
    const newContent = Editor.getContent({ format: 'html' });

    if (this.currentFormattedContent !== newContent) {
      this.currentFormattedContent = newContent;
      this.currentContent = newContent;

      this.args.named.onEditorContentChange?.(newContent ?? '', Editor);
    }
  }

  /*
   * Method to keep track on raw & formatted (by editor) html
   */
  setEditorContent(content) {
    const Editor = this.editor;
    if (Editor) {
      this.delayEditorChange = true;
      Editor.setContent(content);
      this.delayEditorChange = false;
      let formattedContent = Editor.getContent({ format: 'html' });
      this.currentFormattedContent = formattedContent;
      this.currentContent = content;
    }
  }

  bindEditorCustomEvents(Editor) {
    this.customEvents.forEach((event) => {
      this.customBoundEvents.push(event);
      Editor.on(event.name, event.handler);
    });
  }

  unbindEditorCustomEvents(Editor) {
    this.customBoundEvents.forEach((event) => {
      Editor.off(event.name, event.handler);
    });
  }
}
