import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

const textVariants = recipe({
  base: {
    lineHeight: '1.75rem',
  },
  variants: {
    size: {
      sm: {
        fontSize: themeVars.fontSize.sm,
      },
      md: {
        fontSize: themeVars.fontSize.md,
      },
      lg: {
        fontSize: themeVars.fontSize.lg,
      },
    },
    fontWeight: {
      regular: {
        fontWeight: themeVars.fontWeight.regular,
      },
      medium: {
        fontWeight: themeVars.fontWeight.medium,
      },
      semibold: {
        fontWeight: themeVars.fontWeight.semibold,
      },
      bold: {
        fontWeight: themeVars.fontWeight.bold,
      },
    },
  },
  defaultVariants: {
    size: 'md',
    fontWeight: 'regular',
  },
});

export { textVariants };
