import { recipe } from '@vanilla-extract/recipes'
import { themeVars } from '../../styles'

const cardVariants = recipe({
  base: {
    width: '100%',
    border: `1px solid ${themeVars.color.gray200}`,
    borderRadius: themeVars.borderRadius.xl,
    padding: themeVars.spacing.md,
  },
})

const cardDescriptionVariants = recipe({
  base: {
    color: themeVars.color.gray500,
  },
})

export { cardVariants, cardDescriptionVariants }
