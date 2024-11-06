import { recipe } from '@vanilla-extract/recipes';

export const listRowVariants = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
  },
});
