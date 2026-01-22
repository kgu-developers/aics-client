import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  maxWidth: '768px',
  margin: 'auto',
  gap: vars.spacing.xl,
  paddingRight: vars.spacing.lg,
  paddingLeft: vars.spacing.lg,
  boxSizing: 'border-box',
});

export const collapse = style({
  width: '100%',
  backgroundColor: 'transparent',
});

export const buttonWrapper = style({
  width: '100%',
});

export const button = style({
  width: '100%',
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
});

export const panelStyle: React.CSSProperties = {
  marginBottom: vars.spacing.md,
  background: vars.colors.white,
  borderRadius: vars.radius.lg,
  border: 'none',
};

export const buttonContainer = style({
  display: 'flex',
  gap: vars.spacing.md,
  width: '100%',
});
