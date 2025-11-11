import { style } from '@vanilla-extract/css'

import { vars } from '~/vars.css'

export const header = style({
  width: 'inherit',
  height: vars.spacing.header,
  backgroundColor: vars.colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.xs,
  padding: `0 ${vars.spacing.md}`,
  boxShadow: '0px 7px 20px 0px rgba(0,0,0,0.25)',
})

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
})

export const logo = style({
  height: '36px',
  objectFit: 'contain',
})

export const title = style({
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
})
