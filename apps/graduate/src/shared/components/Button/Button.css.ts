import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../../vars.css';

const baseButton = style({
  fontWeight: vars.font.weight.medium,
  border: 'none',
  borderRadius: vars.radius.lg,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  outline: 'none',

  ':focus': {
    outline: '2px solid',
    outlineOffset: '2px',
  },

  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
});

export const variants = styleVariants({
  primary: {
    backgroundColor: vars.colors.main,
    color: vars.colors.white,

    ':hover': {
      backgroundColor: vars.colors.mainDark,
    },

    ':focus': {
      outlineColor: vars.colors.main,
    },
  },

  outline: {
    backgroundColor: 'transparent',
    color: vars.colors.label,
    border: `1px solid ${vars.colors.border}`,

    ':hover': {
      backgroundColor: vars.colors.sub,
    },

    ':focus': {
      outlineColor: vars.colors.sub,
    },
  },

  outlineActive: {
    backgroundColor: vars.colors.mainXLight,
    color: vars.colors.main,
    border: `1px solid ${vars.colors.main}`,

    ':hover': {
      backgroundColor: vars.colors.mainLightHover,
    },

    ':focus': {
      outlineColor: vars.colors.mainLightHover,
    },
  },

  sub: {
    backgroundColor: vars.colors.sub,
    color: vars.colors.subText,

    ':hover': {
      backgroundColor: vars.colors.subHover,
    },

    ':focus': {
      outlineColor: vars.colors.subHover,
    },
  },
});

// 사이즈 스타일
export const sizes = styleVariants({
  sm: {
    padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
    fontSize: vars.font.size.sm,
    height: '32px',
    minWidth: '80px',
  },

  md: {
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,
    fontSize: vars.font.size.md,
    height: '40px',
    minWidth: '100px',
  },

  lg: {
    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    fontSize: vars.font.size.lg,
    height: '48px',
    minWidth: '120px',
  },
});

export const button = style([baseButton]);

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;
