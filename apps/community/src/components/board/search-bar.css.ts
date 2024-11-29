import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const searchBarWrapper = style({
  minWidth: '40vw',
  padding: '0.75rem',
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.between,
  border: '1px solid',
  borderColor: themeVars.color.gray200,
  borderRadius: themeVars.borderRadius.lg,
});

const input = style({
  width: themeVars.width.full,
  outline: 'transparent',
  marginRight: '1rem',
});

export { searchBarWrapper, input };
