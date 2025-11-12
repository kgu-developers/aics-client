import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  maxWidth: '768px',
  margin: 'auto',
  gap: vars.spacing.xl,
});

export const button = style({
  width: '100%',
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
});

export const optionButton = style({
  width: '100%',
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  color: vars.colors.subDark,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  ':hover': {
    backgroundColor: vars.colors.sub,
  },
});

export const activeOptionButton = style({
  width: '100%',
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.colors.mainXLight,
  border: `1px solid ${vars.colors.main}`,
  color: vars.colors.subText,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  ':hover': {
    backgroundColor: vars.colors.sub,
  },
});
