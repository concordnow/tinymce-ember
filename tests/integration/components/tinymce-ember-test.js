import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil} from '@ember/test-helpers';
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

  test('editor id contains editorName and has replaced not alphanumeric chars by - and lowercased all chars', async function(assert) {
    this.set('editorName', 'Thomas Pynchon')
    await render(hbs`<TinymceEmber @editorName={{this.editorName}}/>`);

    let containsEditorName = tinymce.activeEditor.id.indexOf('thomas-pynchon') === 0;
    assert.ok(containsEditorName, 'thomas-pynchon is not part of editor id');
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

  test('editor content update should be propagated', async function(assert) {
    let value = '<p>template block text</p>';
    let updatedValue = '<p>updated content</p>';

    this.set('editorContent', value);
    this.set('contentUpdateAction', (value) => {
        this.set('editorContent', value);
      }
    )

    await render(hbs`
      <TinymceEmber
        @config={{this.config}}
        @editorContent={{this.editorContent}}
        @onEditorContentChange={{action this.contentUpdateAction}}
      />`);

    await waitUntil(() => {
      return tinymce.activeEditor.getContent({format: 'html'}) === value;
    });

    tinymce.activeEditor.setContent(updatedValue);

    await waitUntil(() => {
      return tinymce.activeEditor.getContent({format: 'html'}) === updatedValue;
    });

    assert.equal(this.editorContent, updatedValue);
  });
});
