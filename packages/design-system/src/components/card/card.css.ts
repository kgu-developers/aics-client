import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

export const cardVariants = recipe({
  base: {
    width: '100%',
    border: `1px solid ${themeVars.color.gray200}`,
    borderRadius: themeVars.border.radius.xl,
    padding: themeVars.spacing.md,
  },
});

export const cardDescriptionVariants = recipe({
  base: {
    color: themeVars.color.gray500,
  },
});
