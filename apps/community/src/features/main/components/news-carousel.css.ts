import { screen, themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const news = style([
  {
    width: themeVars.width.full,
  },
  screen.xl({
    width: '60%',
  }),
]);

const newsHeader = style({
  display: 'flex',
  justifyContent: themeVars.justifyContent.between,
  alignItems: themeVars.alignItems.center,
  marginBottom: '1rem',
});

const title = style({
  fontSize: themeVars.fontSize['2xl'],
  fontWeight: themeVars.fontWeight.bold,
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
  justifyContent: themeVars.justifyContent.center,
  alignItems: themeVars.alignItems.center,
});

const image = style({
  position: 'relative',
  width: themeVars.width.full,
  aspectRatio: '16 / 9',
  borderRadius: themeVars.borderRadius['2xl'],
  overflow: 'hidden',
  userSelect: 'none',
  border: `1px solid ${themeVars.color.gray200}`,
});

const controls = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

const slideTitle = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  lineClamp: 1,
  overflow: 'hidden',
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.semibold,
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
  fontSize: themeVars.fontSize.md,
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
