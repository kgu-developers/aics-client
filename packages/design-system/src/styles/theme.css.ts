import { createTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { border } from './border.css';
import { color } from './color.css';
import { container } from './container.css';
import { display } from './display.css';
import { flex } from './flex.css';
import { margin } from './margin.css';
import { opacity } from './opacity.css';
import { spacing } from './spacing.css';
import { typography } from './typography.css';
import { minWidth, width } from './width.css';

const tokens = {
  ...typography,
  ...flex,
  ...border,
  ...margin,
  color: color,
  opacity: opacity,
  width: width,
  minWidth: minWidth,
  display: display,
  // is not css property
  container: container,
  spacing: spacing,
};

const properties = defineProperties({
  properties: tokens,
});

const sprinkles = createSprinkles(properties);

const [themeClass, themeVars] = createTheme(tokens);

export { themeClass, themeVars, sprinkles, tokens };
