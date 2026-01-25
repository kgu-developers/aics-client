import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const toolbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  flexWrap: 'wrap',
  marginBottom: vars.spacing.sm,
});

export const toolbarLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
});

export const toolbarRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  marginLeft: 'auto',
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

const selectedTextBase = {
  fontSize: vars.font.size.md,
  color: vars.colors.subText,
};
export const selectedText = styleVariants({
  inactive: [selectedTextBase],
  active: [{ ...selectedTextBase, color: vars.colors.main }],
});

const selectedStrongBase = {
  fontWeight: Number(vars.font.weight.semibold),
  color: vars.colors.label,
};
export const selectedStrong = styleVariants({
  inactive: [selectedStrongBase],
  active: [{ ...selectedStrongBase, color: vars.colors.main }],
});

export const searchWrap = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const searchInput = style({
  width: 200,
  height: '29px',
  paddingLeft: vars.spacing.sm,
  paddingRight: '32px',
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.white,
  fontSize: vars.font.size.sm,
  '::placeholder': { color: vars.colors.subDark },
});

export const searchIcon = style({
  position: 'absolute',
  right: 10,
  width: 16,
  height: 16,
  pointerEvents: 'none',
  opacity: 0.85,
});
