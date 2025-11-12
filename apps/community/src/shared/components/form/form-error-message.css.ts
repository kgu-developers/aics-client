import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const errorMessage = style({
  color: themeVars.color.orange500,
  fontSize: themeVars.fontSize.sm,
  fontWeight: themeVars.fontWeight.medium,
});

export { errorMessage };
