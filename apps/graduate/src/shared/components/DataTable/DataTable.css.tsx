import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const tableWrap = style({
  width: '100%',
  overflowX: 'auto',
})

export const table = style({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  background: vars.colors.white,
  fontSize: vars.font.size.sm,
  tableLayout: 'fixed',
})

export const th = style({
  textAlign: 'center',
  padding: vars.spacing.md,
  background: vars.colors.sub,
  color: vars.colors.subText,
  borderBottom: `1px solid ${vars.colors.border}`,
  fontWeight: Number(vars.font.weight.medium),
})

export const thCheckbox = style({ width: '44px' })

export const row = style({
  selectors: { '&:hover': { background: vars.colors.mainLightHover } },
})

export const selectedRow = style({
  background: vars.colors.mainXLight,
})

export const td = style({
  padding: vars.spacing.md,
  color: vars.colors.label,
  borderBottom: `1px solid ${vars.colors.border}`,
  textAlign: 'center',
})

export const checkbox = style({ width: 18, height: 18 })

export const nameLink = style({
  textDecoration: 'none',
  color: vars.colors.main,
})