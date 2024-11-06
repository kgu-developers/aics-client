import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

export const spacingVariants = recipe({
  base: {
    flex: 'none',
  },
  variants: {
    size: {
      sm: { height: themeVars.spacing.sm },
      md: { height: themeVars.spacing.md },
      lg: { height: themeVars.spacing.lg },
      xl: { height: themeVars.spacing.xl },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
