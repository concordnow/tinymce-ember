import {
  dependencySatisfies,
  macroCondition,
  importSync,
} from '@embroider/macros';

export const tinymce = (() => {
  if (macroCondition(dependencySatisfies('tinymce', '*'))) {
    return importSync('tinymce').default;
  } else if (window.tinymce) {
    // Importing tinymce module in your web page will run an IIFE that attaches tinymce to the window
    return window.tinymce;
  } else {
    throw new Error(
      `tinymce-ember was unable to detect tinymce. Please add it to your app, either via package or script tag.`
    );
  }
})();
