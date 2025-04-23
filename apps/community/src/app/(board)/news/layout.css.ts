import { style } from '@vanilla-extract/css'

import { screen } from '@aics-client/design-system/styles'

const layoutWrapper = style({
  display: 'flex',
})

const navigationContainer = style([
  screen.lg({
    display: 'block',
  }),
  {
    width: '15rem',
    display: 'none',
  },
])

const content = style({
  flex: 1,
})

export { layoutWrapper, navigationContainer, content }
