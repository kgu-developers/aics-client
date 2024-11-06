import { createTheme } from '@vanilla-extract/css';
import { border } from './border.css';
import { colors } from './colors.css';
import { opacity } from './opacity.css';
import { spacing } from './spacing.css';
import { typography } from './typography.css';

export const [themeClass, themeVars] = createTheme({
  color: colors,
  border: border,
  opacity: opacity,
  spacing: spacing,
  typography: typography,
});
