import { globalStyle, style } from '@vanilla-extract/css'

import { themeVars } from '@aics-client/design-system/styles'

const list = style({
  listStyleType: 'disc',
  margin: '1.5rem',
  padding: 0,
})

globalStyle(`${list} > * + *`, {
  marginTop: '0.5rem',
})

const listTitle = style([
  themeVars.textSize.xl,
  {
    fontWeight: themeVars.fontWeight.bold,
    marginBottom: 0,
  },
])

export { list, listTitle }
