import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const collapse = style({
  width: '100%',
  backgroundColor: 'transparent',
});

export const button = style({
  width: '100%',
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
});
