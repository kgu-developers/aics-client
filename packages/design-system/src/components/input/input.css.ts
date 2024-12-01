import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles';

export const inputWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: themeVars.spacing.xs,
  },
});

export const label = recipe({
  base: {
    fontSize: themeVars.fontSize.sm,
    color: themeVars.color.gray900,
  },
});

export const input = recipe({
  base: {
    width: '100%',
    padding: `${themeVars.spacing.md}`,
    borderRadius: themeVars.borderRadius.lg,
    fontSize: themeVars.fontSize.md,
    outline: 'none',

    '::placeholder': {
      color: themeVars.color.gray400,
    },

    ':disabled': {
      backgroundColor: themeVars.color.gray100,
      cursor: 'not-allowed',
    },
  },
  variants: {
    border: {
      true: {
        border: `1px solid ${themeVars.color.gray200}`,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      false: {
        border: 'none',
      },
    },
  },
  defaultVariants: {
    border: true,
  },
});

export const message = recipe({
  base: {
    fontSize: themeVars.fontSize.sm,
    color: themeVars.color.orange500,
    marginTop: themeVars.spacing.xs,
  },
});
