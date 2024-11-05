import { recipe } from '@vanilla-extract/recipes';
import { themeToken } from '../../styles';

export const buttonVariants = recipe({
  base: {
    borderRadius: '4px',
    border: 'none',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: themeToken.color.primary,
        color: themeToken.color.white,
      },
      secondary: {
        backgroundColor: themeToken.color.secondary,
        color: themeToken.color.white,
      },
      danger: {
        backgroundColor: themeToken.color.danger,
        color: themeToken.color.white,
      },
    },
    size: {
      sm: {
        padding: `${themeToken.spacing.sm} ${themeToken.spacing.md}`,
      },
      md: {
        padding: `${themeToken.spacing.md} ${themeToken.spacing.lg}`,
      },
      lg: {
        padding: `${themeToken.spacing.lg} ${themeToken.spacing.lg}`,
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
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});
