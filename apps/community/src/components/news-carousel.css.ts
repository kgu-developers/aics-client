import { style } from '@vanilla-extract/css';

const news = style({
  width: '60%',
  '@media': {
    'screen and (max-width: 1240px)': {
      width: '100%',
    },
  },
});

const newsHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
});

const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: 0,
});

const viewport = style({
  overflow: 'hidden',
});

const slides = style({
  display: 'flex',
  marginLeft: '-1rem',
});

const link = style({
  flex: '0 0 50%',
  paddingLeft: '1rem',
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

const slideTitle = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  lineClamp: 1,
  overflow: 'hidden',
  fontSize: '1.25rem',
  fontWeight: 600,
  margin: 0,
  marginTop: '1rem',
  marginBottom: '0.5rem',
  textAlign: 'center',
});

const slideDescription = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  lineClamp: 2,
  overflow: 'hidden',
  fontSize: '1rem',
  margin: 0,
  textAlign: 'center',
});

export {
  news,
  newsHeader,
  title,
  viewport,
  slides,
  link,
  slide,
  image,
  controls,
  slideTitle,
  slideDescription,
};
