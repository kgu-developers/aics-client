import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const headerWrap = style({
  marginBottom: vars.spacing.md,
  marginTop: vars.spacing.lg,
})

export const adminMark = style({
  color: vars.colors.label,
  fontSize: vars.font.size.md,
  marginBottom: vars.spacing.xs,
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`
})

export const title = style({
  fontSize: vars.font.size.xl,
  fontWeight: vars.font.weight.bold,
  color: vars.colors.label,
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`
})
