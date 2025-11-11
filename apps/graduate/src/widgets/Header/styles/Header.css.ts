import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const header = style({
  width: 'inherit',
  height: vars.spacing.header,
  backgroundColor: vars.colors.white,
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  maxWidth: '1023px',
  padding: `0 ${vars.spacing.md}`,
})

export const logo = style({
  width: '160px',
  height: 'auto',
})

export const title = style({
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
})
