import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  backgroundColor: vars.colors.sub,
});
export const container = style({
  padding: vars.spacing.xl,
  maxWidth: '1200px',
  margin: '0 auto',
});
export const backButtonWrapper = style({
  marginBottom: vars.spacing.sm,
});

export const filePreviewContainer = style({
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 200px)',
  overflow: 'auto',
  backgroundColor: vars.colors.sub,
});

export const toolbarTriggerArea = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '200px',
  zIndex: 10,
  pointerEvents: 'auto',
});

export const toolbarWrapper = style({
  position: 'absolute',
  bottom: vars.spacing.lg,
  left: '50%',
  transform: 'translateX(-50%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  opacity: 1,
  selectors: {
    '&[data-visible="false"]': {
      opacity: 0,
      transform: 'translateX(-50%) translateY(20px)',
      pointerEvents: 'none',
    },
  },
});
