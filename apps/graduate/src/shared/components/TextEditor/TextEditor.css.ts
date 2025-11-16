import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const editorCard = style({
  paddingTop: vars.spacing.lg,
  backgroundColor: vars.colors.sub,
  borderRadius: vars.radius.md,
});

export const editorHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing.md,
});

export const editorTitle = style({
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.bold,
  margin: 0,
  color: vars.colors.black,
});

export const quillEditor = style({
  marginBottom: vars.spacing.md,
  backgroundColor: 'white',
  borderRadius: vars.radius.sm,
});

export const saveButtonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});
