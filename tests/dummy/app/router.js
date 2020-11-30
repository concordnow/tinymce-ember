import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from 'dummy/config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  docsRoute(this, function() {
    this.route('simple');
    this.route('inline');
    this.route('target');
    this.route('disable');
  });
  this.route('not-found', { path: '/*path' });
});
