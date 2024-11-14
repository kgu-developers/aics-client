import { style } from '@vanilla-extract/css';

const cardContainer = style({
  display: 'grid',
  padding: '2rem 0',
  gap: '1rem',

  '@media': {
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
});

export { cardContainer };
