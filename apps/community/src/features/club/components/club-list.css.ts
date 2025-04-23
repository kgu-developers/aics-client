import { style } from '@vanilla-extract/css'

import { screen, themeVars } from '@aics-client/design-system/styles'

const clubList = style([
  screen.xl({
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  }),
  {
    display: 'grid',
    gap: themeVars.spacing.md,
  },
])

export { clubList }
