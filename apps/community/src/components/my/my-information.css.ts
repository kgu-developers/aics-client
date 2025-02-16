import { screen, themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  ...screen.md({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: themeVars.spacing.md,
  }),
});

export { cardWrapper };
