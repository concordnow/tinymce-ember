import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';
import layout from '../templates/components/tinymce-ember';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  layout,

  editorName: 'tinymce',

  init() {
    this._super(...arguments);

    // Generate editor's id for textarea
    this.set('editorId', `editor-${guidFor(this)}`);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    // Initialize only if no active editor
    if (!window.tinymce.activeEditor) {
      // Run editor initialisation once page is rendered
      scheduleOnce('afterRender', this, this.initEditor);
    }
  },

  initEditor() {
    if (!window.tinymce) {
      throw new Error('TinyMCE hasn\'t been attached to the window hence not imported in your application.');
    }

    this.config.selector = `#${this.editorId}`;

    window.tinymce.init(this.config);
  }
});
