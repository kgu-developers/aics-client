import { style } from '@vanilla-extract/css'

import { themeVars } from '@aics-client/design-system/styles'

const formWrapper = style({
  display: themeVars.display.grid,
  gap: themeVars.spacing.md,
})

const formField = style({
  display: themeVars.display.flex,
  flexDirection: 'column',
  gap: themeVars.spacing.xs,
})

const errorMessage = style({
  color: themeVars.color.orange500,
  fontSize: themeVars.fontSize.sm,
  fontWeight: themeVars.fontWeight.medium,
})

export { formWrapper, formField, errorMessage }
