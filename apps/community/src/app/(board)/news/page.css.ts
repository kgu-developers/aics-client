import { style } from '@vanilla-extract/css'

import { themeVars } from '@aics-client/design-system/styles'

const boardWrapper = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  alignItems: themeVars.alignItems.center,
  gap: '2rem',
})

export { boardWrapper }
