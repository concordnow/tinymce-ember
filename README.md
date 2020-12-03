tinymce-ember
==============================================================================

[![Build Status](https://travis-ci.org/concordnow/tinymce-ember.svg?branch=master)](https://travis-ci.org/concordnow/tinymce-ember)
[![Ember Observer Score](https://emberobserver.com/badges/tinymce-ember.svg)](https://emberobserver.com/addons/tinymce-ember)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/concordnow/tinymce-ember)

Ember addon that helps you integrate [TinyMCE](https://www.tiny.cloud/docs/) editor into your application.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install tinymce-ember
```


Usage
------------------------------------------------------------------------------

TinyMCE is here set as devDependency for testing purpose only.

You might need to create a funnel in the **ember-cli-build.js** file so the editor will locate skins
```js
const Funnel = require('broccoli-funnel');
...
const skins = new Funnel('node_modules/', {
  srcDir: 'tinymce/skins',
  destDir: '/skins'
});

return app.toTree([skins]);
```

The addon is designed in such way that it is the responsability of the application to provide the TinyMCE module.

Basic
------------------------------------------------------------------------------

In the file where the editor is supposed to run
```js
import tinymce from 'tinymce/tinymce'; // eslint-disable-line no-unused-vars
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
```

And in an initialization lifecycle hook (e.g. in the init)
```js
this.config = {
  base_url: 'tests/tinymce',
  theme: 'silver'
}
```

Then include the addon in the wanted location
```hbs
<TinymceEmber @config={{this.config}} />
```

Inline
------------------------------------------------------------------------------

Editor can be init with the inline setting and some content
```js
this.config = {
  base_url: 'tests/tinymce',
  theme: 'silver',
  inline: true
};
this.htmlStringValue = '<h1>Just a title to render the line, please click</p>'
```
```hbs
<TinymceEmber @config={{this.config}} @content={{this.htmlStringValue}} />
```

Target
------------------------------------------------------------------------------

Addon doesn't come with a handlebars template file and a HTML structure in it, so an HTML element can also be provided to init the editor.

```js
const Target = document.getElementById('targeted-element');

this.config = {
  base_url: 'tests/tinymce',
  target: Target,
  theme: 'silver'
};
```

```hbs
<div id="targeted-element"></div>
<TinymceEmber @config={{this.config}}/>
```

Thanks
------------------------------------------------------------------------------

* [TinyMCE React](https://github.com/tinymce/tinymce-react)
* [EmberCLI AddonDocs](https://ember-learn.github.io/ember-cli-addon-docs/)

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
