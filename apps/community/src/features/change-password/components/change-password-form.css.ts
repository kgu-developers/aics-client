import { screen, themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  gap: themeVars.spacing.xl,
  width: '60%',
});

const newPasswordWrapper = style({
  display: 'grid',
  gap: themeVars.spacing.xl,
  ...screen.lg({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: themeVars.spacing.md,
  }),
});

const inputField = style({
  width: '100%',
});

export { formWrapper, newPasswordWrapper, inputField };
