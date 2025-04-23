import { style } from '@vanilla-extract/css'

import { themeVars } from '@aics-client/design-system/styles'

const headerWrapper = style({
  textAlign: 'center',
})

const title = style([
  themeVars.textSize['2xl'],
  {
    fontWeight: themeVars.fontWeight.bold,
    marginBottom: themeVars.spacing.sm,
  },
])

export { headerWrapper, title }
