tinymce-ember
==============================================================================

[![Build Status](https://github.com/concordnow/tinymce-ember/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/concordnow/tinymce-ember/actions/workflows/main.yml)
[![Ember Observer Score](https://emberobserver.com/badges/tinymce-ember.svg)](https://emberobserver.com/addons/tinymce-ember)

Ember addon that helps you integrate [TinyMCE](https://www.tiny.cloud/docs/) editor into your application.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above
* ember-auto-import >= 2
* Tinymce v5 or above


Installation
------------------------------------------------------------------------------

```
ember install tinymce-ember
```

**Note:**

The addon is designed in such way that it is the responsability of the application to provide the TinyMCE module.

Install TinyMCE via [package](https://www.npmjs.com/package/tinymce) or via [script](https://www.tiny.cloud/docs/quick-start/).

Motivation
------------------------------------------------------------------------------

This addon is inspired by official TinyMCE React plugin [tinymce-react](https://github.com/tinymce/tinymce-react).

Its goal is to be a standard, drop-in solution for the ember community.

Usage
------------------------------------------------------------------------------

Place the `{{editor}}` modifier on any `div`, `textarea` to create a TinyMCE editor instance.

Based on action up / data down principle, you can update your content.

[simple-example][]

You can pass [TinyMCE config](https://www.tiny.cloud/docs/configure/) object to your editor instance.

[inline-example][]

You can turn on/off TinyMCE read-only mode dynamically.

[disabled-example][]


API
------------------------------------------------------------------------------

### &lcub;&lcub;editor&rcub;&rcub;

**customEvents**: *Array*

Defaults to `[]`.

List of events given to the editor

Type of event should be

```js
{
    name: string,
    handler: function
}
```


**content**: *String*

Defaults to `''`.

A given string to be set as editor's content


**onEditorContentChange**: *String*

Defaults to `'change keyup setcontent'`.

Each of those events will call an `onEditorContentChange` function if given as parameter


Thanks
------------------------------------------------------------------------------

* [TinyMCE React](https://github.com/tinymce/tinymce-react)

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

<!-- Examples -->
[simple-example]: https://codesandbox.io/s/github/concordnow/tinymce-ember/tree/master/test-app?initialpath=%2Fexamples%2Fsimple&file=%2Fapp%2Fcomponents%2Fsimple-example.hbs
[inline-example]: https://codesandbox.io/s/github/concordnow/tinymce-ember/tree/master/test-app?initialpath=%2Fexamples%2Finline&file=%2Fapp%2Fcomponents%2Finline-example.hbs
[disabled-example]: https://codesandbox.io/s/github/concordnow/tinymce-ember/tree/master/test-app?initialpath=%2Fexamples%2Fdisabled&file=%2Fapp%2Fcomponents%2Fdisabled-example.hbs
