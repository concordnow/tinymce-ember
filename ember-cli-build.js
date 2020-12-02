'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const tinymce = new Funnel('node_modules/', {
    srcDir: 'tinymce',
    destDir: '/tests/tinymce'
  });

  let funnels = [tinymce];

  if (process.env.EMBER_ENV === 'development') {
    const skins = new Funnel('node_modules/', {
      srcDir: 'tinymce/skins',
      destDir: '/docs/tests/tinymce/skins'
    });

    funnels.push(skins);
  }

  return app.toTree(funnels);
};
