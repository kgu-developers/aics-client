import { globalStyle } from '@vanilla-extract/css';

/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

globalStyle('*, ::before, ::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontFamily: `system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
  lineHeight: '1.15',
  WebkitTextSizeAdjust: '100%',
  tabSize: '4',
});

/*
Sections
========
*/

globalStyle('body', {
  margin: '0',
});

/*
Text-level semantics
====================
*/

/**
Add the correct font weight in Chrome and Safari.
*/

globalStyle('b, strong', {
  fontWeight: 'bolder',
});

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

globalStyle('code, kbd, samp, pre', {
  fontFamily: `ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace`,
  fontSize: '1em',
});

/**
Add the correct font size in all browsers.
*/

globalStyle('small', {
  fontSize: '80%',
});

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
});

globalStyle('sub', {
  bottom: '-0.25em',
});

globalStyle('sup', {
  top: '-0.5em',
});

/*
Tabular data
============
*/

/**
Correct table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

globalStyle('table', {
  borderColor: 'currentcolor',
});

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
});

/**
Correct the inability to style clickable types in iOS and Safari.
*/

globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  WebkitAppearance: 'button',
});

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

globalStyle('legend', {
  padding: '0',
});

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

globalStyle('progress', {
  verticalAlign: 'baseline',
});

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
  height: 'auto',
});

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

globalStyle('[type="search"]', {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

globalStyle('::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
});

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

globalStyle('summary', {
  display: 'list-item',
});
