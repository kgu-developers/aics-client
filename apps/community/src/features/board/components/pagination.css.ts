import { themeVars } from '@aics-client/design-system/styles'
import { style } from '@vanilla-extract/css'

const controllerWrapper = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.center,
  alignItems: themeVars.alignItems.center,
  minWidth: '30%',
  gap: '0.75rem',
  userSelect: 'none',
})

const buttonList = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
})

const pageButton = style({
  width: '2rem',
  height: '2rem',
  borderRadius: themeVars.borderRadius.lg,
  textAlign: 'center',
})

const active = style({
  fontWeight: themeVars.fontWeight.semibold,
  color: themeVars.color.white,
  backgroundColor: themeVars.color.black,
})

const hidden = style({
  visibility: 'hidden',
})

export { controllerWrapper, buttonList, pageButton, active, hidden }
