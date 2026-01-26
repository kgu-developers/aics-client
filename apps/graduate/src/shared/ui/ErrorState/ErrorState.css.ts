import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const errorContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: vars.spacing.xl,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.colors.border}`,
  minHeight: '200px',
});

export const errorContainerFullscreen = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: vars.colors.sub,
});

export const errorContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.md,
  textAlign: 'center',
  maxWidth: '400px',
});

export const errorIcon = style({
  color: '#ef4444',
  marginBottom: vars.spacing.sm,
});

export const errorMessage = style({
  fontSize: vars.font.size.md,
  color: vars.colors.subDark,
  margin: 0,
  lineHeight: 1.6,
});

export const retryButton = style({
  marginTop: vars.spacing.sm,
});
