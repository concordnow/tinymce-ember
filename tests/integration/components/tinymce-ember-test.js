import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

 /* eslint-disable no-unused-vars */
import tinymce from 'tinymce/tinymce';

module('Integration | Component | tinymce-ember', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<TinymceEmber />`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it renders with content', async function(assert) {
    this.set('editorContent', '');

    await render(hbs`
      <TinymceEmber @editorContent={{this.editorContent}}/>
    `);

    this.set('editorContent', '<p>template block text</p>');

    assert.equal(tinymce.activeEditor.getContent({format: 'html'}), '<p>template block text</p>');
  });
});
