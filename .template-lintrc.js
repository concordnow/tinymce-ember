'use strict';

module.exports = {
  extends: ['recommended'],
  rules: {
    // Recommended rules we override
    'no-inline-styles': false,
    'simple-unless': {
      maxHelpers: -1
    },
    'table-groups': false,

    // Added rules to preset
    'deprecated-each-syntax': true,
    'deprecated-inline-view-helper': true,
    'eol-last': 'never',
    'inline-link-to': true,
    'linebreak-style': true,
    'no-trailing-spaces': true,
    'no-unnecessary-concat': true,
    'self-closing-void-elements': true,
    'template-length': {
      max: 825,
      min: 1
    }
  }
};
