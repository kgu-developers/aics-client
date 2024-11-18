import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const section = style({
  display: themeVars.display.grid,
  margin: '0 auto',
  padding: '1rem',
  width: '25rem',
});

export { section };
