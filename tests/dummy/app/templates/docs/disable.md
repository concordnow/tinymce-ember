# Disable

Content edition can be set or unset at will
```js
import 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
...
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
<TinymceEmber @disabled={{this.disabled}} />
```

<button class="docs-btn docs-mb-2" {{on 'click' (action 'toggleDisabled')}}>toggle disabled</button>
<TinymceEmber @config={{this.config}} @disabled={{this.disabled}} />
