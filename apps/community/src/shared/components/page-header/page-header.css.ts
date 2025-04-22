import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const pageHeaderWrapper = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  gap: themeVars.spacing.xl,
});

const pageHeaderTitle = style([
  themeVars.flexColumn,
  {
    gap: '0.75rem',
    marginBottom: '3rem',
  },
]);

const title = style([
  themeVars.textSize['3xl'],
  {
    fontWeight: themeVars.fontWeight.bold,
    color: '#333D4B',
  },
]);

const description = style({
  color: '#4E5968',
});

export { pageHeaderWrapper, pageHeaderTitle, title, description };
