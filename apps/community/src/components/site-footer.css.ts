import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const footer = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

const footerNav = style({
  display: 'grid',
  gap: '2rem',
  padding: '1.25rem 2.5rem',
  borderRadius: '1rem',
  backgroundColor: 'black',
  color: 'white',

  '@media': {
    'screen and (min-width: 1280px)': {
      display: 'flex',
      justifyContent: themeVars.justifyContent.between,
      padding: '2.5rem 5rem',
    },
  },
});

const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeVars.spacing.md,
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.bold,
});

const navLinks = style({
  width: '70%',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',

  '@media': {
    'screen and (max-width: 1280px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(88px, 1fr))',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    },
  },
});

const navGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

const hideMyPage = style({
  display: 'none',
});

const navGroupTitle = style({
  fontWeight: 'bold',
});

const navGroupLinks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const navGroupLink = style({
  color: 'lightgray',
  fontSize: '0.875rem',
  transition: 'color 0.2s ease',
  ':hover': {
    color: 'white',
  },
});

const footerCopy = style({
  textAlign: 'center',
  padding: '2rem 0',
  color: 'gray',
});

export {
  footer,
  footerNav,
  logo,
  navLinks,
  navGroup,
  hideMyPage,
  navGroupLinks,
  navGroupTitle,
  navGroupLink,
  footerCopy,
};
