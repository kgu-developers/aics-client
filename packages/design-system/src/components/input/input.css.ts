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
      opacity: themeVars.opacity[80],
      cursor: 'not-allowed',
    },

    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${themeVars.color.white}, 0 0 0 4px ${themeVars.color.gray400}`,
    },
  },
  variants: {
    variant: {
      primary: {
        border: `1px solid ${themeVars.color.gray200}`,
        boxShadow: themeVars.boxShadow.sm,
      },
      ghost: {
        border: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const message = recipe({
  base: {
    fontSize: themeVars.fontSize.sm,
    color: themeVars.color.orange500,
    marginTop: themeVars.spacing.xs,
  },
});
