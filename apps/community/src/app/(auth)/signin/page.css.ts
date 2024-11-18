import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const section = style({
  display: themeVars.display.grid,
  margin: '0 auto',
  padding: '1rem',
  width: '25rem',
});

const infoWrapper = style({
  textAlign: 'center',
});

const title = style([
  themeVars.textSize['2xl'],
  {
    fontWeight: themeVars.fontWeight.bold,
  },
]);

const linkWrapper = style({
  display: themeVars.display.flex,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '0.5rem',
});

const link = style({
  color: themeVars.color.blue600,
  textDecoration: 'underline',

  ':hover': {
    color: themeVars.color.blue800,
    transition: 'color 0.5s',
  },
});

export { section, infoWrapper, title, linkWrapper, link };
