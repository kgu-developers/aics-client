import { style } from '@vanilla-extract/css';

const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333D4B',
});

const description = style({
  margin: 0,
  color: '#4E5968',
});

export { title, description };
