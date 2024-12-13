import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const navigationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: '5rem',
  gap: themeVars.spacing.lg,
});

const separator = style({
  width: '12rem',
  borderBottom: `1px solid ${themeVars.color.gray300}`,
});

const navigationTitle = style({
  fontSize: themeVars.fontSize['2xl'],
  fontWeight: themeVars.fontWeight.bold,
});

const navigationLink = style({
  fontSize: themeVars.fontSize.lg,

  ':hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
  },
});

export { navigationContainer, separator, navigationTitle, navigationLink };
