import { screen, themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const navigationContainer = style([
  screen.lg({
    display: 'block',
  }),
  {
    width: '15rem',
    display: 'none',
  },
]);

const navigationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.lg,
});

const separator = style({
  width: '12rem',
  borderBottom: `1px solid ${themeVars.color.gray300}`,
});

const navigationTitle = style({
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.bold,
});

const navigationLink = style({
  fontSize: themeVars.fontSize.md,

  ':hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
  },
});

export {
  navigationWrapper,
  navigationContainer,
  separator,
  navigationTitle,
  navigationLink,
};
