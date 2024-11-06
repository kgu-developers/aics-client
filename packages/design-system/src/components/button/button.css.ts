import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

export const buttonVariants = recipe({
  base: {
    borderRadius: '4px',
    border: 'none',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: themeVars.color.primary,
        color: themeVars.color.white,
      },
      secondary: {
        backgroundColor: themeVars.color.secondary,
        color: themeVars.color.white,
      },
      danger: {
        backgroundColor: themeVars.color.danger,
        color: themeVars.color.white,
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
