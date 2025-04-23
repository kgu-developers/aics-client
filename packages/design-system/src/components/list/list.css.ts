import { recipe } from '@vanilla-extract/recipes'

const listVariants = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export { listVariants }
