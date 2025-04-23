import { createTheme } from '@vanilla-extract/css'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import border from './tokens/border'
import boxShadow from './tokens/box-shadow'
import color from './tokens/color'
import container from './tokens/container'
import display from './tokens/display'
import margin from './tokens/margin'
import opacity from './tokens/opacity'
import spacing from './tokens/spacing'
import typography from './tokens/typography'
import width from './tokens/width'

const tokens = {
  ...typography,
  ...border,
  ...margin,
  ...display,
  ...width,
  color: color,
  opacity: opacity,
  // presets
  container: container,
  spacing: spacing,
  boxShadow: boxShadow,
}

const properties = defineProperties({
  properties: tokens,
})

const sprinkles = createSprinkles(properties)

const [themeClass, themeVars] = createTheme(tokens)

export { themeClass, themeVars, sprinkles, tokens }
