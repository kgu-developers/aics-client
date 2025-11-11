import { style } from '@vanilla-extract/css'

import { vars } from '~/vars.css'

export const upperSection = style({
  width: 'inherit',
  display: 'flex',
  gap: vars.spacing.md,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
})

export const header = style({
  width: 'inherit',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colors.main,
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
  gap: vars.spacing.lg,
})

export const scheduleCard = style({
  width: '30%',
  minWidth: '300px',
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  paddingBottom: 0,
  gap: vars.spacing.md,
  '@media': {
    '(max-width: 768px)': {
      width: 'inherit',
    },
  },
})

export const headerDate = style({
  fontSize: vars.font.size.md,
  color: vars.colors.subDark,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
})

export const headerTitle = style({
  fontSize: vars.font.size.xl,
  color: vars.colors.white,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
})

export const headerText = style({
  fontSize: vars.font.size.xl,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
})

export const headerDescription = style({
  fontSize: vars.font.size.md,
  color: vars.colors.mainLightHover,
  lineHeight: '1.5',
})

export const homeButtonSection = style({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.spacing.md,
})

export const homeButton = style({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  border: 'none',
  display: 'flex',
  gap: vars.spacing.sm,
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  borderRadius: vars.radius.lg,
  color: vars.colors.subText,
  padding: vars.spacing.md,
  backgroundColor: vars.colors.white,
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

export const noticeSection = style({
  width: 'inherit',
  height: '1000px',
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  gap: vars.spacing.md,
})
