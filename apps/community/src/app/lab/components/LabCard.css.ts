import { style } from '@vanilla-extract/css';

const cardContainer = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 2rem',
  gap: '3rem',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '0.5rem',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
});

const image = style({
  objectFit: 'contain',
});

const divider = style({
  width: 1,
  height: '90%',
  backgroundImage:
    'repeating-linear-gradient(#000, #000 1px, transparent 1px, transparent 3px)',
  opacity: 0.5,
});

const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingBottom: '1rem',
});

const title = style({
  color: '#333D4B',
});

const link = style({
  color: 'black',
  ':hover': {
    color: 'blue',
    transition: 'color 0.3s',
  },
});

export { cardContainer, image, divider, infoContainer, title, link };
