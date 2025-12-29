import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const form = style({
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const input = style({
  boxSizing: 'border-box',
  paddingRight: vars.spacing.md,
  paddingLeft: vars.spacing.md,
  paddingTop: '12px',
  paddingBottom: '12px',
  borderRadius: vars.radius.lg,
  border: '1px solid #ccc',
  width: '100%',

  ':focus': {
    outline: 'none',
    borderColor: '#4A90E2',
  },
});

export const errorMessage = style({
  color: 'red',
  fontSize: '12px',
  margin: '4px 0 0 0',
});

export const button = style({
  fontSize: vars.font.size.sm,
});
