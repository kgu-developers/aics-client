import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '../../styles';

const listRowVariants = recipe({
  base: {
    display: themeVars.display.flex,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
  },
});

export { listRowVariants };
