import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
})

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  position: 'relative',
})

export const sectionHeaderTitle = style({
  fontSize: vars.font.size.xl,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
})

export const sectionHeaderSubtitle = style({
  fontSize: vars.font.size.md,
  color: vars.colors.subDark,
})

export const sectionHeaderAction = style({
  position: 'absolute',
  right: 0,
  top: 0,
})
