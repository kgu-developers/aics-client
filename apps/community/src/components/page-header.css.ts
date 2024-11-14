import { style } from '@vanilla-extract/css';

const pageHeaderWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

const title = style({
  margin: 0,
  fontSize: '2rem',
  fontWeight: 700,
  color: '#333D4B',
});

const description = style({
  margin: 0,
  color: '#4E5968',
});

export { pageHeaderWrapper, title, description };
