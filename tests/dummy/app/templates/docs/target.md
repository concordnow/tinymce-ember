# Target

Addon doesn't come with a handlebars template file and a HTML structure in it, so an HTML element can also be provided to init the editor.

```js
import 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
...
const Target = document.getElementById('targeted-element');
...
this.config = {
  target: Target
};
```

```hbs
<div id="targeted-element"></div>
<Editor @config={{this.config}}/>
```

<div id="targeted-element"></div>
<Editor @config={{this.config}}/>
