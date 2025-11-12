import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '../../styles';

const buttonVariants = recipe({
  base: {
    border: 'none',
    borderRadius: '4px',
    color: themeVars.color.white,
  },
  variants: {
    color: {
      primary: {
        backgroundColor: themeVars.color.primary,
      },
      secondary: {
        backgroundColor: themeVars.color.secondary,
      },
      danger: {
        backgroundColor: themeVars.color.danger,
      },
      warning: {
        backgroundColor: themeVars.color.warning,
      },
      black: {
        backgroundColor: themeVars.color.black,
      },
      outline: {
        backgroundColor: themeVars.color.white,
        color: themeVars.color.black,
        border: `1px solid ${themeVars.color.gray300}`,
        ':hover': {
          backgroundColor: themeVars.color.gray50,
        },
      },
    },
    size: {
      sm: {
        padding: `${themeVars.spacing.sm} ${themeVars.spacing.md}`,
      },
      md: {
        padding: `${themeVars.spacing.md} ${themeVars.spacing.lg}`,
      },
      lg: {
        padding: `${themeVars.spacing.lg} ${themeVars.spacing.lg}`,
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        opacity: themeVars.opacity[75],
      },
      false: {
        cursor: 'pointer',
      },
    },
    loading: {
      true: {
        display: 'flex',
        alignItems: 'center',
        gap: themeVars.spacing.xs,
        cursor: 'default',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export { buttonVariants };
