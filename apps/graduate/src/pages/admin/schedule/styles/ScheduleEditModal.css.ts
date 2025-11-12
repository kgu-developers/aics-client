import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const editButtonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const modalContent = style({
  padding: vars.spacing.sm,
});

export const formField = style({
  marginBottom: vars.spacing.md,
});

export const lastFormField = style({
  marginBottom: 0,
});

export const label = style({
  display: 'block',
  marginBottom: vars.spacing.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.colors.label,
  fontSize: vars.font.size.md,
});

export const fullWidthSelect = style({
  width: '100%',
});

export const fullWidthDatePicker = style({
  width: '100%',
});
