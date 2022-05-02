'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      exclude: ['tinymce/**/**'],
    },
    autoImport: {
      watchDependencies: ['tinymce-ember'],
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
      {
        package: 'tinymce',
      },
    ],
  });
};
