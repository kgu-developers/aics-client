import { screen } from '@aics-client/design-system/styles'
import { style } from '@vanilla-extract/css'

const wrapper = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  screen.xl({
    gap: '4rem',
  }),
])

// const newsSection = style({
//   display: 'flex',
//   gap: '4rem',

//   '@media': {
//     'screen and (max-width: 1240px)': {
//       flexDirection: 'column',
//     },
//   },
// })

const newsSection = style([
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  screen.xl({
    display: 'flex',
    flexDirection: 'row',
    gap: '4rem',
  }),
])

export { wrapper, newsSection }
