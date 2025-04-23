import { themeVars } from '@aics-client/design-system/styles'
import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('html, body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

const root = style([
  themeVars.container,
  {
    position: 'relative',
    display: themeVars.display.flex,
    flexDirection: themeVars.flexDirection.column,
    minHeight: themeVars.minWidth.dvh,
  },
])

const main = style({
  flex: 1,
  padding: '1rem 0.5rem 2rem 0.5rem',

  '@media': {
    'screen and (min-width: 1280px)': {
      padding: '2rem 0 4rem 0',
    },
  },
})

export { root, main }
