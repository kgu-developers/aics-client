import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const root = style({
  minHeight: '100dvh',
  backgroundColor: vars.colors.sub,
  padding: vars.spacing.lg,
});

export const container = style({
  padding: vars.spacing.xl,
  maxWidth: '1000px',
  margin: '0 auto',
});

export const backButtonWrapper = style({
  marginBottom: vars.spacing.lg,
});

export const formCard = style({
  backgroundColor: vars.colors.white,
  padding: vars.spacing.xl,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.sub}`,
});

export const formTitle = style({
  fontSize: vars.font.size['2xl'],
  fontWeight: vars.font.weight.bold,
  marginBottom: vars.spacing.xl,
  color: vars.colors.black,
});

export const metaInfo = style({
  marginBottom: vars.spacing.lg,
  color: vars.colors.subDark,
  fontSize: vars.font.size.sm,
});

export const metaItem = style({
  lineHeight: '1.6',
});

export const formField = style({
  marginBottom: vars.spacing.lg,
});

export const label = style({
  display: 'block',
  marginBottom: vars.spacing.sm,
  fontWeight: vars.font.weight.medium,
  fontSize: vars.font.size.md,
  color: vars.colors.label,
});

export const required = style({
  color: vars.colors.error,
});

export const errorMessage = style({
  color: vars.colors.error,
  fontSize: vars.font.size.sm,
  marginTop: vars.spacing.xs,
});

export const checkboxLabel = style({
  fontWeight: vars.font.weight.medium,
});

export const textarea = style({
  fontSize: vars.font.size.sm,
  lineHeight: '1.8',
});

export const uploadSection = style({
  marginBottom: vars.spacing.xl,
});

export const actionSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const leftActions = style({
  display: 'flex',
  gap: vars.spacing.sm,
});

export const rightActions = style({
  display: 'flex',
  gap: vars.spacing.sm,
});
