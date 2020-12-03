import Controller from '@ember/controller';

const CONFIG = {
  base_url: `${document.location.origin}/tinymce`,
  theme: 'silver'
};

export default Controller.extend({
  config: null,

  init() {
    this._super(...arguments);

    this.config = CONFIG;
  }
});
