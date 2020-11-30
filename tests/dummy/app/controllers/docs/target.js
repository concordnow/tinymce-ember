import Controller from '@ember/controller';

import tinymce from 'tinymce/tinymce'; // eslint-disable-line no-unused-vars
import 'tinymce/themes/silver';
import 'tinymce/icons/default';

const CONFIG = {
  base_url: 'tests/tinymce',
  theme: 'silver'
};

export default Controller.extend({
  config: null,

  init() {
    this._super(...arguments);

    const Target = document.getElementById('targeted-element');
    this.config = CONFIG;
    this.config.target = Target;
  },

  initEditorAfterInit() {
    const Target = document.getElementById('targeted-element');
    this.config = CONFIG;
    this.config.target = Target;
  }
});
