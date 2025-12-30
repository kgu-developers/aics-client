import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const toolbar = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto auto',
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radius.md,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

export const infoItem = style({
  fontSize: vars.font.size.md,
  color: vars.colors.label,
  fontWeight: vars.font.weight.medium,
  display: 'flex',
  alignItems: 'center',
  padding: vars.spacing.xs,
});

export const button = style({
  width: '100%',
});
