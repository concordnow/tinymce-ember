# Disable

Content edition can be set or unset at will
```js
this.config = {
  base_url: 'tests/tinymce',
  theme: 'silver'
};
this.disable = true;
...
actions: {
  toggleDisable() {
    this.toggleProperty('disable');
  }
}
```
```hbs
<button {{on 'click' (action 'toggleDisabled')}}>toggle disabled</button>
<TinymceEmber @config={{this.config}} @disabled={{this.disabled}} />
```

<button class="docs-btn docs-mb-2" {{on 'click' (action 'toggleDisabled')}}>toggle disabled</button>
<TinymceEmber @config={{this.config}} @disabled={{this.disabled}} />
