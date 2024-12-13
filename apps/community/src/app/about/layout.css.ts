import { style } from '@vanilla-extract/css';

const layoutWrapper = style({
  display: 'flex',
});

const navigationContainer = style({
  width: '17rem',
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'none',
    },
  },
});

const content = style({
  flex: 1,
});

export { layoutWrapper, navigationContainer, content };
