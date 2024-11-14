import { globalStyle, style } from '@vanilla-extract/css';

const list = style({
  listStyleType: 'disc',
  margin: '1.5rem',
  padding: 0,
});

globalStyle(`${list} > * + *`, {
  marginTop: '0.5rem',
});

const listTitle = style({
  fontWeight: 600,
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  marginBottom: 0,
});

export { list, listTitle };
