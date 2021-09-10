import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('docs', function () {
    this.route('simple');
    this.route('inline');
    this.route('target');
    this.route('disable');
    this.route('modifiers', function () {
      this.route('editor');
    });
  });
  this.route('not-found', { path: '/*path' });
});
