# Simple

The addon is designed in such way that it is the responsability of the application to provide the TinyMCE module.

In the file where the editor is supposed to run
```js
import 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
```

Then include the addon in the wanted location
```hbs
<TinymceEmber />
```

<TinymceEmber @config={{this.config}} />
