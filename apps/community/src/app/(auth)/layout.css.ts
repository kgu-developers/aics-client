import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

export const section = style({
  display: themeVars.display.grid,
  gap: themeVars.spacing.lg,
  margin: '0 auto',
  padding: themeVars.spacing.md,
  width: '25rem',
});
