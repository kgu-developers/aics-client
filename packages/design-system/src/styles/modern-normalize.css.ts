import { globalStyle } from '@vanilla-extract/css';

globalStyle('div', {
  display: '',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('::before', {
  boxSizing: 'border-box',
});

globalStyle('::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontFamily: `system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
  lineHeight: '1.15',
  WebkitTextSizeAdjust: '100%',
  tabSize: '4',
});

globalStyle('body', {
  margin: '0',
});

globalStyle('b', {
  fontWeight: 'bolder',
});

globalStyle('strong', {
  fontWeight: 'bolder',
});

globalStyle('code, kbd, samp, pre', {
  fontFamily: `ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace`,
  fontSize: '1em',
});

globalStyle('small', {
  fontSize: '80%',
});

globalStyle('sub', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
  bottom: '-0.25em',
});

globalStyle('sup', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
  top: '-0.5em',
});

globalStyle('table', {
  borderColor: 'currentcolor',
});

globalStyle('button', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
  WebkitAppearance: 'button',
});

globalStyle('input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
});

globalStyle('legend', {
  padding: '0',
});

globalStyle('progress', {
  verticalAlign: 'baseline',
});

globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
  height: 'auto',
});

globalStyle('[type="search"]', {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

globalStyle('::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
});

globalStyle('summary', {
  display: 'list-item',
});
