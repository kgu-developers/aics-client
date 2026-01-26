import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  padding: vars.spacing.xl,
  maxWidth: '1200px',
  margin: '0 auto',
});

export const root = style({
  minHeight: '100dvh',
  backgroundColor: vars.colors.sub,
  padding: vars.spacing.lg,
});
