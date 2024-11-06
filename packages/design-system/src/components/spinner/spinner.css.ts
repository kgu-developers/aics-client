import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

export const spinnerVariants = recipe({
  base: {
    animation: `${spin} 1s linear infinite`,
  },
  variants: {
    size: {
      md: {
        width: themeVars.spacing.md,
        height: themeVars.spacing.md,
      },
      lg: {
        width: themeVars.spacing.lg,
        height: themeVars.spacing.lg,
      },
    },
    opacity: {
      25: {
        opacity: themeVars.opacity[25],
      },
      75: {
        opacity: themeVars.opacity[75],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
