import { style } from '@vanilla-extract/css';

const notice = style({
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  '@media': {
    'screen and (max-width: 1240px)': {
      width: '100%',
    },
  },
});

const noticeHeader = style({
  marginBottom: '1rem',
});

const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: 0,
});

const list = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  gap: '2rem',
});

const post = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const postTitle = style({
  margin: 0,
  fontSize: '1.25rem',
  fontWeight: 600,
});

const postDescription = style({
  overflow: 'hidden',
  display: '-webkit-box',
  lineClamp: 2,
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  margin: 0,
  fontSize: '1rem',
});

export { notice, noticeHeader, title, list, post, postTitle, postDescription };
