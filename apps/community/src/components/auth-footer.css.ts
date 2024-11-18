import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const footerWrapper = style({
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

export { footerWrapper, link };
