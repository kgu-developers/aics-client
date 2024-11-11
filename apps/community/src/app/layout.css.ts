import { globalStyle, style } from '@vanilla-extract/css';
import { container } from '~/styles/utility.css';

globalStyle('html, body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

const root = style([
  container,
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100dvh',
  },
]);

const main = style({
  flex: 1,
});

export { root, main };
