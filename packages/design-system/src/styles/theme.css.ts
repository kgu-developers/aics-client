import { createTheme } from '@vanilla-extract/css';
import { COLORS } from './colors.css';
import { OPACITY } from './opacity.css';
import { spacing } from './spacing.css';
import { typography } from './typography.css';

export const [themeClass, themeVars] = createTheme({
  color: {
    primary: COLORS.PRIMARY,
    secondary: COLORS.SECONDARY,
    warning: COLORS.WARNING,
    danger: COLORS.DANGER,
    white: COLORS.WHITE,
    black: COLORS.BLACK,
    gray200: COLORS.GRAY200,
    gray400: COLORS.GRAY400,
  },
  spacing: spacing,
  typography: typography,
  opacity: {
    25: OPACITY[25],
    75: OPACITY[75],
  },
});
