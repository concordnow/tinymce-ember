import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import tinymce from 'tinymce';

const CONFIG = {
  base_url: 'tinymce',
  theme: 'silver',
  toolbar:
    'undo redo | fontselect | fontsizeselect | forecolor backcolor | align lineheight | bullist numlist',
};

module('Integration | Modifier | editor', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('config', CONFIG);
    this.set('content', '');
  });

  test('it renders on a div', async function (assert) {
    assert.equal(tinymce.activeEditor, null);
    await render(hbs`<div {{editor}}></div>`);

    assert.notEqual(tinymce.activeEditor, null);
    assert.equal(tinymce.activeEditor.getContent(), '');
  });

  test('it renders on a textarea', async function (assert) {
    assert.equal(tinymce.activeEditor, null);
    await render(hbs`<textarea {{editor}}></textarea>`);

    assert.notEqual(tinymce.activeEditor, null);
    assert.equal(tinymce.activeEditor.getContent(), '');
  });

  test('it keeps node attributes', async function (assert) {
    await render(
      hbs`<textarea name="foobar" data-test="3" {{editor}}></textarea>`
    );

    assert
      .dom('textarea')
      .hasAttribute('name', 'foobar')
      .hasAttribute('data-test', '3');
  });

  test('it renders with config', async function (assert) {
    await render(hbs`<textarea {{editor config=this.config}}></textarea>`);

    assert.equal(tinymce.activeEditor.getParam('base_url'), CONFIG.base_url);
    assert.equal(tinymce.activeEditor.getParam('theme'), CONFIG.theme);
    assert.equal(tinymce.activeEditor.getParam('toolbar'), CONFIG.toolbar);
  });

  test('it renders with config & content', async function (assert) {
    let value =
      '<div><p>template block text</p><p>template block text</p></div>';
    let checkValue =
      '<div>\n<p>template block text</p>\n<p>template block text</p>\n</div>';

    this.set('content', value);

    await render(hbs`
      <textarea
        {{editor
          config=this.config
          content=this.content
        }}
      ></textarea>`);

    assert.equal(
      tinymce.activeEditor.getContent({ format: 'html' }),
      checkValue
    );
    assert.equal(tinymce.activeEditor.getParam('base_url'), CONFIG.base_url);
    assert.equal(tinymce.activeEditor.getParam('theme'), CONFIG.theme);
    assert.equal(tinymce.activeEditor.getParam('toolbar'), CONFIG.toolbar);
  });

  test('editor content update should be propagated downstream', async function (assert) {
    let value =
      '<div><p>template block text</p><p>template block text</p></div>';
    let checkValue =
      '<div>\n<p>template block text</p>\n<p>template block text</p>\n</div>';
    let updatedValue =
      '<div>\n<p>updated content</p>\n<p>updated content</p>\n</div>';

    this.set('content', value);

    await render(hbs`
      <textarea
        {{editor
          content=this.content
        }}
      ></textarea>`);

    assert.equal(
      tinymce.activeEditor.getContent({ format: 'html' }),
      checkValue
    );

    this.set('content', updatedValue);

    assert.equal(
      tinymce.activeEditor.getContent({ format: 'html' }),
      updatedValue
    );
  });

  test('editor content update should be propagated upstream', async function (assert) {
    let value = '<p>template block text</p>';
    let updatedValue = '<p>updated content</p>';

    this.set('content', value);
    this.set('contentUpdateAction', (value) => {
      this.set('content', value);
    });

    await render(hbs`
      <textarea
        {{editor
          config=this.config
          content=this.content
          onEditorContentChange=(action this.contentUpdateAction)
        }}
      ></textarea>`);

    assert.equal(tinymce.activeEditor.getContent({ format: 'html' }), value);

    tinymce.activeEditor.setContent(updatedValue);

    assert.equal(
      tinymce.activeEditor.getContent({ format: 'html' }),
      updatedValue
    );

    assert.equal(this.content, updatedValue);
  });

  test('editor content update should be propagated upstream on keypress', async function (assert) {
    let value = '<p>toto</p>';
    let updatedValue = '<p>Some default Texttoto</p>';

    this.set('content', value);
    this.set('contentUpdateAction', (value) => {
      this.set('content', value);
    });

    await render(hbs`
      <textarea
        {{editor
          content=this.content
          onEditorContentChange=(action this.contentUpdateAction)
        }}
      ></textarea>`);

    assert.equal(tinymce.activeEditor.getContent({ format: 'html' }), value);

    tinymce.activeEditor.execCommand(
      'mceInsertContent',
      false,
      'Some default Text'
    );

    assert.equal(this.content, updatedValue);
  });

  test('it renders disabled and prevent update', async function (assert) {
    let value = '<p>foobar</p>';

    this.set('content', value);

    await render(hbs`
      <textarea
        {{editor
          content=this.content
          disabled=true
        }}
      ></textarea>`);

    assert.true(tinymce.activeEditor.mode.isReadOnly());
    assert.equal(this.content, value);
  });
});
