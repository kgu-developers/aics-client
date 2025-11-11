import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const header = style({
  width: 'inherit',
  backgroundColor: vars.colors.sub,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  gap: vars.spacing.md,
})

export const headerDate = style({
  fontSize: vars.font.size.md,
  color: vars.colors.subDark,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
})

export const headerText = style({
  fontSize: vars.font.size.xl,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
})

export const headerDescription = style({
  fontSize: vars.font.size.md,
  color: vars.colors.subDark,
  lineHeight: '1.5',
})

export const headerButton = style({
  width: '100%',
  maxWidth: '360px',
  height: '100%',
  border: 'none',
  padding: vars.spacing.md,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  ':hover': {
    backgroundColor: vars.colors.subHover,
  },
})

export const homeButtonSection = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.spacing.md,
})

export const homeButton = style({
  width: '100%',
  height: '100%',
  border: 'none',
  padding: vars.spacing.md,
  backgroundColor: vars.colors.sub,
  color: vars.colors.subText,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  ':hover': {
    backgroundColor: vars.colors.subHover,
    color: vars.colors.subDark,
  },
})

export const noticeAction = style({
  border: 'none',
  background: 'none',
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
  fontWeight: vars.font.weight.normal,
  textDecoration: 'underline',
  cursor: 'pointer',
  ':hover': {
    color: vars.colors.subText,
  },
})
