import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const searchBarWrapper = style({
  minWidth: '40vw',
  padding: '0',
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.between,
  alignItems: themeVars.alignItems.center,
  border: '1px solid',
  borderColor: themeVars.color.gray200,
  borderRadius: themeVars.borderRadius.lg,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
});

const input = style({
  width: themeVars.width.full,
  outline: 'transparent',
});

const button = style({
  padding: '0 1rem',
});

export { searchBarWrapper, input, button };
