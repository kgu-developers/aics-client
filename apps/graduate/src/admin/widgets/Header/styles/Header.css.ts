import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  width: '100%',
  height: vars.spacing.header,
  background: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.xs,
  padding: `0 ${vars.spacing.md}`,
  boxSizing: 'border-box',
  boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.01)',
  color: vars.colors.black,
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
});

export const logo = style({
  height: '36px',
  objectFit: 'contain',
});

export const title = style({
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
});
