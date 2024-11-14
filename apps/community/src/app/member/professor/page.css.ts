import { style } from '@vanilla-extract/css';

export const professorListWrapper = style({
  display: 'grid',
  gap: 16,
  gridTemplateColumns: '1fr',
  marginTop: 42,

  '@media': {
    'screen and (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1280px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (min-width: 1536px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});
