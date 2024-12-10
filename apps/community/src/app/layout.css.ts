import { themeVars } from '@aics-client/design-system/styles';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('html, body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

const root = style([
  themeVars.container,
  {
    position: 'relative',
    display: themeVars.display.flex,
    flexDirection: themeVars.flexDirection.column,
    minHeight: themeVars.minWidth.dvh,
  },
]);

const main = style({
  flex: 1,
  paddingBottom: '8rem',
});

export { root, main };
