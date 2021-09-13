'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const Funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    fingerprint: {
      exclude: [
        'tinymce/**/**'
      ],
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const tinymceIcons = new Funnel('node_modules/', {
    srcDir: 'tinymce/icons',
    destDir: '/tinymce/icons'
  });

  const tinymcePlugins = new Funnel('node_modules/', {
    srcDir: 'tinymce/plugins',
    destDir: '/tinymce/plugins'
  });

  const tinymceSkins = new Funnel('node_modules/', {
    srcDir: 'tinymce/skins',
    destDir: '/tinymce/skins'
  });

  const tinymceThemes = new Funnel('node_modules/', {
    srcDir: 'tinymce/themes',
    destDir: '/tinymce/themes'
  });

  const tinymceTest = new Funnel('node_modules/', {
    srcDir: 'tinymce',
    destDir: '/tests/tinymce'
  });

  app.import(
    'node_modules/tinymce/tinymce.js', {
      using: [
        { transformation: 'cjs', as: 'tinymce/tinymce' }
      ]
    }
  );

  return app.toTree([tinymceTest, tinymceIcons, tinymcePlugins, tinymceSkins, tinymceThemes]);
};
