import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

export const textVariants = recipe({
  base: {
    lineHeight: '1.75rem',
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
    fontWeight: {
      regular: {
        fontWeight: themeVars.typography.fontWeight.regular,
      },
      medium: {
        fontWeight: themeVars.typography.fontWeight.medium,
      },
      semibold: {
        fontWeight: themeVars.typography.fontWeight.semibold,
      },
      bold: {
        fontWeight: themeVars.typography.fontWeight.bold,
      },
    },
  },
  defaultVariants: {
    size: 'md',
    fontWeight: 'regular',
  },
});
