import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  maxWidth: '768px',
  margin: 'auto',
  gap: vars.spacing.xl,
  backgroundColor: vars.colors.white,
  padding: vars.spacing.xl,
  borderRadius: vars.radius.lg,
});
