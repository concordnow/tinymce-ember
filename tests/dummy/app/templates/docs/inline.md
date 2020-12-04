# Inline

Editor can be init with the inline setting and some content
```js
import 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
...
this.config = {
  inline: true
};
this.htmlStringValue = '<h1>Just a title to render the line, please click</p>'
```
```hbs
<TinymceEmber @config={{this.config}} @content={{this.htmlStringValue}} />
```

<TinymceEmber @config={{this.config}} @content={{this.htmlStringValue}} />
