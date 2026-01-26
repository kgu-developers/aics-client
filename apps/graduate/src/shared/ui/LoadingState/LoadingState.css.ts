import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const loadingContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: vars.spacing.xl,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.colors.border}`,
  minHeight: '200px',
});

export const loadingContainerFullscreen = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: vars.colors.sub,
});
