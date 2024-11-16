import { createThemeContract } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { border } from './border.css';
import { color } from './color.css';
import { display } from './display.css';
import { flex } from './flex.css';
import { opacity } from './opacity.css';
import { typography } from './typography.css';
import { width } from './width.css';

const tokens = {
  ...typography,
  ...flex,
  color: color,
  border: border,
  opacity: opacity,
  width: width,
  display: display,
};

const properties = defineProperties({
  properties: tokens as Record<string, unknown>,
});

const sprinkles = createSprinkles(properties);

const vars = createThemeContract(tokens);

export { sprinkles, tokens, vars };
