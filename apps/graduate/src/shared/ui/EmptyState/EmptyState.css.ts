import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: vars.spacing.xl,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.colors.border}`,
  minHeight: '200px',
});

export const emptyContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.sm,
  textAlign: 'center',
  maxWidth: '400px',
});

export const emptyIcon = style({
  color: vars.colors.subDark,
  opacity: 0.5,
  marginBottom: vars.spacing.sm,
});

export const emptyMessage = style({
  fontSize: vars.font.size.md,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  color: vars.colors.subDark,
  margin: 0,
});

export const emptyDescription = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
  margin: 0,
  opacity: 0.8,
});
