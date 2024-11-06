import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

export const badgeVariants = recipe({
  base: {
    padding: '2px 6px',
    borderRadius: '4px',
    color: themeVars.color.white,
  },
  variants: {
    size: {
      sm: {
        fontSize: themeVars.typography.fontSize.sm,
      },
      md: {
        fontSize: themeVars.typography.fontSize.md,
      },
      lg: {
        fontSize: themeVars.typography.fontSize.lg,
      },
    },
    color: {
      primary: {
        backgroundColor: themeVars.color.primary,
      },
      danger: {
        backgroundColor: themeVars.color.danger,
      },
      warning: {
        backgroundColor: themeVars.color.warning,
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'warning',
  },
});
