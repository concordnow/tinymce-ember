import Controller from '@ember/controller';
import config from 'dummy/config/environment';

const CONFIG = {
  base_url: `${document.location.origin}${config.rootURL}tinymce`,
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
