import { themeVars } from '@aics-client/design-system/styles'
import { style } from '@vanilla-extract/css'

export const section = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.lg,
  margin: '0 auto',
  padding: themeVars.spacing.md,
})
