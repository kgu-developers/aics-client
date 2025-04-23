import { style } from '@vanilla-extract/css'

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
})

const section2 = style({
  display: 'flex',
  gap: '4rem',
  '@media': {
    'screen and (max-width: 1240px)': {
      flexDirection: 'column',
    },
  },
})

export { wrapper, section2 }
