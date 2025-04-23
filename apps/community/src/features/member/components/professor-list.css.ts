import { themeVars } from '@aics-client/design-system/styles'
import { style } from '@vanilla-extract/css'

const professorListWrapper = style({
  display: themeVars.display.grid,
  gap: themeVars.spacing.md,
  gridTemplateColumns: '1fr',
  marginTop: themeVars.spacing.xl,

  '@media': {
    'screen and (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1280px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (min-width: 1536px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
})

export { professorListWrapper }
