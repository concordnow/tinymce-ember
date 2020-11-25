import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

 /* eslint-disable no-unused-vars */
import tinymce from 'tinymce/tinymce';

const CONFIG = {
  base_url: 'tinymce',
  theme: 'silver',
  toolbar:
  'undo redo | fontselect | fontsizeselect | forecolor backcolor | align lineheight | bullist numlist'
};

module('Integration | Component | tinymce-ember', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      config: CONFIG,
      editorContent: ''
    });
  });

  test('it renders on its own', async function(assert) {
    await render(hbs`<TinymceEmber />`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it renders with config', async function(assert) {
    await render(hbs`<TinymceEmber @config={{this.config}} />`);

    assert.equal(tinymce.activeEditor.getParam('base_url'), CONFIG.base_url);
    assert.equal(tinymce.activeEditor.getParam('theme'), CONFIG.theme);
    assert.equal(tinymce.activeEditor.getParam('toolbar'), CONFIG.toolbar);
  });

  test('it renders with config & content', async function(assert) {
    await render(hbs`
      <TinymceEmber @config={{this.config}} @editorContent={{this.editorContent}}/>
    `);

    this.set('editorContent', '<p>template block text</p>');

    assert.equal(tinymce.activeEditor.getContent({format: 'html'}), '<p>template block text</p>');
  });
});
