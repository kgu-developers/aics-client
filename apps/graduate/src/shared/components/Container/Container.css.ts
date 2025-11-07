import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  padding: vars.spacing.xl,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radius.md,
  selectors: {
    '& + &': {
      marginTop: vars.spacing.md,
    },
  },
});
