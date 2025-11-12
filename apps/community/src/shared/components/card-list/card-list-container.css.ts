import { screen, themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const cardListContainer = style([
  screen.xl({
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  }),
  {
    display: 'grid',
    gap: themeVars.spacing.md,
  },
]);

export { cardListContainer };
