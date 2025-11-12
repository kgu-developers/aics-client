import { screen } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const layoutWrapper = style({
  display: 'flex',
});

const navigationContainer = style([
  screen.lg({
    display: 'block',
  }),
  {
    width: '15rem',
    display: 'none',
  },
]);

const content = style({
  flex: 1,
});

export { layoutWrapper, navigationContainer, content };
