import { style } from '@vanilla-extract/css';

const hero = style({
  position: 'relative',
  width: '100%',
});

const viewport = style({
  borderRadius: '1.5rem',
  overflow: 'hidden',
});

const slides = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '100%',
});

const slide = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px',
  userSelect: 'none',
});

const image = style({
  objectFit: 'cover',
});

const controls = style({
  position: 'absolute',
  left: '50%',
  bottom: '0.5rem',
  transform: 'translateX(-50%)',
});

export { hero, viewport, slides, slide, image, controls };
