import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const leftSide = style({
  display: 'none',

  '@media': {
    'screen and (min-width: 1280px)': {
      display: 'flex',
      alignItems: 'center',
      gap: themeVars.spacing.xl,
      width: '80%',
      visibility: 'visible',
    },
  },
});

const logo = style({
  display: 'flex',
  gap: themeVars.spacing.sm,
  alignItems: 'center',
  fontWeight: themeVars.fontWeight.bold,
});

const nav = style({
  display: 'flex',
  gap: themeVars.spacing.xl,
});

const navGroup = style({
  position: 'relative',
  padding: '1rem 0',
});

const navGroupTitle = style({
  textDecoration: 'none',
  fontSize: themeVars.fontSize.sm,
  fontWeight: themeVars.fontWeight.semibold,
  color: themeVars.color.gray700,
  cursor: 'pointer',
  selectors: {
    [`${navGroup}:hover &`]: {
      color: themeVars.color.black,
    },
  },
  ':hover': {
    color: themeVars.color.black,
  },
});

const navGroupLinks = style({
  position: 'absolute',
  top: '3rem',
  background: 'white',
  border: `1px solid ${themeVars.color.gray200}`,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  visibility: 'hidden',
  transform: 'translateY(10px)',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  padding: '0.75rem',
  borderRadius: '0.75rem',
  fontSize: themeVars.fontSize.sm,
  selectors: {
    [`${navGroup}:hover &`]: {
      visibility: 'visible',
      transform: 'translateY(0)',
    },
  },
});

const navGroupLink = style({
  padding: '1rem',
  textDecoration: 'none',
  color: 'black',
  display: 'block',
  borderRadius: '0.5rem',
  ':hover': {
    background: themeVars.color.gray100,
  },
});

export {
  leftSide,
  logo,
  nav,
  navGroup,
  navGroupLink,
  navGroupLinks,
  navGroupTitle,
};
