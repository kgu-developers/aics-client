import { style } from '@vanilla-extract/css';

const footer = style({
  display: 'flex',
  flexDirection: 'column',
});

const footerNav = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2.5rem',
  borderRadius: '1rem',
  backgroundColor: 'black',
  color: 'white',
});

const navLinks = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '2rem',
});

const navGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
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
  navLinks,
  navGroup,
  navGroupLinks,
  navGroupTitle,
  navGroupLink,
  footerCopy,
};
