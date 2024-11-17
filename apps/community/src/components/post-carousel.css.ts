import { style } from '@vanilla-extract/css';

const post = style({
  width: '100%',
});

const viewport = style({
  overflow: 'hidden',
});

const slides = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '50%',
});

const slide = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const image = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9',
  borderRadius: '1rem',
  overflow: 'hidden',
  userSelect: 'none',
});

const controls = style({
  display: 'flex',
  justifyContent: 'end',
});

export { post, viewport, slides, slide, image, controls };
