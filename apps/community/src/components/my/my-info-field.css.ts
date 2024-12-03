import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const list = style({
  margin: '1.5rem 0',
  padding: 0,
});

const listTitle = style([
  themeVars.textSize.xl,
  {
    fontWeight: themeVars.fontWeight.semibold,
    marginBottom: 0,
  },
]);

export { list, listTitle };
