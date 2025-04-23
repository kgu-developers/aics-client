import { themeVars } from '@aics-client/design-system/styles'
import { style } from '@vanilla-extract/css'

export const card = style({
  width: themeVars.width.full,
  backgroundColor: themeVars.color.white,
  border: '1px solid',
  borderColor: themeVars.color.gray200,
  borderRadius: themeVars.borderRadius.xl,
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  alignItems: 'center',
  textAlign: 'center',
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  gap: themeVars.spacing.lg,
  paddingTop: '0.75rem',
})

export const avatarImage = style({
  marginTop: '0.375rem',
  width: '8rem',
  height: '8rem',
  borderRadius: themeVars.borderRadius.full,
  objectFit: 'cover',
})

export const fallbackImage = style({
  marginTop: '0.375rem',
  width: '8rem',
  height: '8rem',
  borderRadius: themeVars.borderRadius.full,
  backgroundColor: themeVars.color.gray500,
  display: themeVars.display.flex,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: themeVars.fontSize.md,
  color: themeVars.color.black,
})

export const cardContent = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  gap: themeVars.spacing.xs,
})

export const professorName = style({
  fontWeight: themeVars.fontWeight.semibold,
  letterSpacing: '-0.025em',
  margin: themeVars.margin.none,
})

export const professorType = style({
  margin: themeVars.margin.none,
  fontSize: themeVars.fontSize.sm,
  fontWeight: 400,
  lineHeight: themeVars.lineHeight.sm,
  color: themeVars.color.gray600,
})

export const cardFooter = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  gap: themeVars.spacing.sm,
  paddingBottom: '1rem',
})

export const professorContact = style({
  margin: themeVars.margin.none,
})

export const professorEmail = style({
  margin: themeVars.margin.none,
})
