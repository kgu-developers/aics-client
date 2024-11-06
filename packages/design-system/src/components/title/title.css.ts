import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

export const titleVariants = recipe({
  base: {
    display: 'flex',
    padding: '8px 0px',
    fontWeight: themeVars.typography.fontWeight.semibold,
  },
  variants: {
    as: {
      h1: {
        fontSize: themeVars.typography.fontSize['2xl'],
      },
      h2: {
        fontSize: themeVars.typography.fontSize.xl,
      },
    },
    borderBottom: {
      true: {
        borderBottom: `1px solid ${themeVars.color.gray200}`,
      },
    },
  },
  defaultVariants: {
    as: 'h1',
    borderBottom: false,
  },
});
