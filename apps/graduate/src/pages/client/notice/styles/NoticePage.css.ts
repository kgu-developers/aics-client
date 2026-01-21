import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const mainSection = style({
  position: 'absolute',
  top: vars.spacing.header,
  width: '100dvw',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 800,
  gap: vars.spacing.lg,
  padding: vars.spacing.lg,

  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});
