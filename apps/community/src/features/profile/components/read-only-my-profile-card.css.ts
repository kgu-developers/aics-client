import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const field = style({
  margin: '1.5rem 0',
});

const fieldTitle = style({
  width: '6rem',
  fontSize: themeVars.fontSize.lg,
  fontWeight: themeVars.fontWeight.semibold,
});

export { field, fieldTitle };
