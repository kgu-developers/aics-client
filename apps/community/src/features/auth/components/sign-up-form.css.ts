import { style } from '@vanilla-extract/css'

import { screen, themeVars } from '@aics-client/design-system/styles'

const formWrapper = style([
  {
    display: themeVars.display.grid,
    gap: themeVars.spacing.md,
    width: themeVars.width.full,
  },
  screen.md({
    width: '28rem',
  }),
])

const formField = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  gap: themeVars.spacing.xs,
})

const errorMessage = style({
  color: themeVars.color.orange500,
  fontSize: themeVars.fontSize.sm,
  fontWeight: themeVars.fontWeight.medium,
})

export { formWrapper, formField, errorMessage }
