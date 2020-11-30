# Inline

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

<TinymceEmber @config={{this.config}} @content={{this.htmlStringValue}} />
