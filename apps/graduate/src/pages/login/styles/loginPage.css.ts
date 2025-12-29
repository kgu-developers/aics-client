import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: vars.spacing.lg,
  width: '100%',
});

export const logo = style({
  width: '180px',
  objectFit: 'contain',
});

export const title = style({
  width: '100%',
  textAlign: 'center',
  lineHeight: '1.5',
  fontSize: vars.font.size['2xl'],
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  color: vars.colors.black,
  margin: 0,
});

export const subTitle = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.subText,
  margin: 0,
  lineHeight: '1.5',
  textAlign: 'center',
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xs,
});

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  width: '300px',
});

export const button = style({
  width: '100%',
  fontSize: vars.font.size.sm,
});
