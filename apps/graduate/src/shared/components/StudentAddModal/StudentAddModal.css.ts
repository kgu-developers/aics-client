import { style, globalStyle } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const modeSelector = style({
  display: 'flex',
  gap: vars.spacing.md,
  marginBottom: vars.spacing.md,
});

export const modeCard = style({
  flex: 1,
  height: 'auto',
  padding: vars.spacing.md,
  textAlign: 'left',
});

// Normalize AntD Button's inner span so our content can stack
globalStyle(`.ant-btn.${modeCard} > span`, {
  display: 'block',
  whiteSpace: 'normal',
  width: '100%',
});

export const modeTitle = style({
  display: 'block',
  marginBottom: vars.spacing.xs,
  fontSize: vars.font.size['2xl'],
  fontWeight: vars.font.weight.semibold,
});

export const modeDescription = style({
  fontSize: vars.font.size.xs,
  display: 'block',
});

export const cardInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  width: '100%',
  gap: vars.spacing.xs,
});
