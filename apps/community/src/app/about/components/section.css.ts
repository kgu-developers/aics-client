import { globalStyle, style } from '@vanilla-extract/css';

const section = style({
  lineHeight: '1.75rem',
});

globalStyle(`${section} > * + *`, {
  marginTop: '1.5rem',
});

const sectionTitle = style({
  borderBottom: '1px solid #e2e8f0',
  marginTop: '2.5rem',
  marginBottom: '0',
  paddingBottom: '0.5rem',
  fontWeight: 600,
});

export { section, sectionTitle };
