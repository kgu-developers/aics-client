import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '0.8rem',
  borderRadius: themeVars.borderRadius.md,
  backgroundColor: themeVars.color.black,
  color: themeVars.color.white,

  ':hover': {
    backgroundColor: themeVars.color.gray900,
    transition: 'background-color 0.3s',
  },

  ':disabled': {
    backgroundColor: themeVars.color.gray200,
    color: themeVars.color.gray500,
    cursor: 'not-allowed',
  },
});
