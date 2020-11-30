# Simple

TinyMCE is here set as devDependency for testing purpose only.

You might need to create a funnel in the **ember-cli-build.js** file so the editor will locate skins
```js
const Funnel = require('broccoli-funnel');
...
const skins = new Funnel('node_modules/', {
  srcDir: 'tinymce/skins',
  destDir: '/docs/tests/tinymce/skins'
});

return app.toTree([skins]);
```

The addon is designed in such way that it is the responsability of the application to provide the TinyMCE module.

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

<TinymceEmber @config={{this.config}} />
