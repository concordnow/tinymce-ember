import Controller from '@ember/controller';

import tinymce from 'tinymce/tinymce'; // eslint-disable-line no-unused-vars
import 'tinymce/themes/silver';
import 'tinymce/icons/default';

const CONFIG = {
  base_url: 'tests/tinymce',
  theme: 'silver',
  inline: true
};

export default Controller.extend({
  config: null,
  htmlStringValue: '<h1>Just a title to render the line, please click</p>',

  init() {
    this._super(...arguments);

    this.config = CONFIG;
  }
});
