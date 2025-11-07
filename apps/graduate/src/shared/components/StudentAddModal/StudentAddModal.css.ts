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
  border: `1px solid ${vars.colors.border}`,
  borderRadius: 8,
  backgroundColor: vars.colors.sub,
});

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

export const modeCardActive = style({
  backgroundColor: vars.colors.white,
  borderColor: vars.colors.main,
});

export const modeCardInactive = style({
  backgroundColor: vars.colors.sub,
});
