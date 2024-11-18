import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

export const input = style({
  padding: '0.7rem',
  border: `1px solid ${themeVars.color.gray200}`,

  borderRadius: themeVars.borderRadius.lg,
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',

  '::placeholder': {
    color: themeVars.color.gray400,
  },
});
