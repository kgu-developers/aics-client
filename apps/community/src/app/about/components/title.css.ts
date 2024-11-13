import { style } from '@vanilla-extract/css';

const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const description = style({
  margin: 0,
  color: '#64748B',
});

export { title, description };
