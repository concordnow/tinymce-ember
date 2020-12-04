import Controller from '@ember/controller';
import config from 'dummy/config/environment';

const CONFIG = {
  base_url: `${document.location.origin}${config.rootURL}tinymce`,
  theme: 'silver'
};

export default Controller.extend({
  config: null,

  init() {
    this._super(...arguments);

    this.config = CONFIG;
  }
});
