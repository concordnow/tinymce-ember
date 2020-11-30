# Target

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

<div id="targeted-element"></div>
<TinymceEmber @config={{this.config}}/>
