import { style } from '@vanilla-extract/css';

const footer = style({
  display: 'flex',
  flexDirection: 'column',
});

const footerNav = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2.5rem',
  borderRadius: '1rem',
  backgroundColor: 'black',
  color: 'white',
});

const footerCopy = style({
  textAlign: 'center',
  padding: '2rem 0',
  color: 'gray',
});

export { footer, footerNav, footerCopy };
