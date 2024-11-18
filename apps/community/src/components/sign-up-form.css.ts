import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const formWrapper = style({
  display: themeVars.display.grid,
  gap: '0.7rem',
});

const formField = style({
  display: themeVars.display.flex,
  flexDirection: 'column',
  gap: '0.3rem',
});

const errorMessage = style({
  color: themeVars.color.orange500,
  fontSize: themeVars.fontSize.sm,
  fontWeight: themeVars.fontWeight.medium,
});

export { formWrapper, formField, errorMessage };
