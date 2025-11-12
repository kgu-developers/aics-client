import { screen, themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const container = style({
  flex: 1,
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  justifyContent: themeVars.justifyContent.center,
  alignItems: themeVars.alignItems.center,
  justifySelf: 'center',
  gap: themeVars.spacing.xl,
});

const logo = style([
  screen.md({
    width: '14rem',
  }),
  {
    width: '7rem',
  },
]);

const text = style([
  screen.md({
    fontSize: themeVars.fontSize.xl,
  }),
  {
    fontSize: themeVars.fontSize.md,
  },
]);

export { container, logo, text };
