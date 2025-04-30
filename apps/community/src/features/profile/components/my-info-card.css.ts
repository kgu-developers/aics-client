import { style } from '@vanilla-extract/css'

import { themeVars } from '@aics-client/design-system/styles'

const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.lg,
  marginBottom: themeVars.spacing.xl,
  padding: themeVars.spacing.xl,
  border: `1px solid ${themeVars.color.gray300}`,
  borderRadius: themeVars.borderRadius.xl,
  boxShadow: themeVars.boxShadow.md,
})

const cardTitle = style({
  marginBottom: themeVars.spacing.lg,
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.bold,
})

const cardContent = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: themeVars.spacing.lg,
})

export { cardWrapper, cardTitle, cardContent }
