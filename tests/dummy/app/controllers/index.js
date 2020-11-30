import Controller from '@ember/controller';

const CONFIG = {
  base_url: 'tests/tinymce',
  theme: 'silver'
};

export default Controller.extend({
  config: null,

  init() {
    this._super(...arguments);

    this.config = CONFIG;
  }
});
