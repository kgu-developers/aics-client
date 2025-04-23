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

const field = style({
  margin: '1.5rem 0',
})

const fieldTitle = style({
  width: '6rem',
  fontSize: themeVars.fontSize.lg,
  fontWeight: themeVars.fontWeight.semibold,
})

const editFieldWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const editField = style({
  margin: '1.5rem 0',
  width: '20rem',
})

export {
  cardWrapper,
  cardTitle,
  cardContent,
  field,
  fieldTitle,
  editFieldWrapper,
  editField,
}
