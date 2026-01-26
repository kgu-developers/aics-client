import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const loading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: vars.font.size.lg,
  color: vars.colors.subText,
});

export const error = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: vars.font.size.lg,
  color: vars.colors.error,
});

export const empty = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: vars.font.size.lg,
  color: vars.colors.subDark,
});
