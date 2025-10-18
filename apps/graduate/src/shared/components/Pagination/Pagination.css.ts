import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const footer = style({
  display: 'flex',
  justifyContent: 'flex-end',   
  alignItems: 'center',          
  gap: vars.spacing.md,
  borderTop: `1px solid ${vars.colors.border}`,
  flexWrap: 'wrap',
  minHeight: 48,                 
})

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
})


export const pager = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
})

export const pagerBtn = style({
  minWidth: 36,
  height: 36,
  padding: `0 ${vars.spacing.sm}`,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.colors.border}`,
  background: vars.colors.white,
  color: vars.colors.label,
  fontSize: vars.font.size.sm,
  cursor: 'pointer',
  selectors: {
    '&:hover': { background: vars.colors.sub },
    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
  },
})

export const pagerBtnActive = style({
  borderColor: vars.colors.mainBorder,
  background: vars.colors.mainXLight,
  color: vars.colors.main,
  fontWeight: Number(vars.font.weight.semibold),
})

export const pageJumpInline = style({
  display: 'flex',
  alignItems: 'center',         
  gap: vars.spacing.xs,
})

export const pageJumpInput = style({
  width: 72,
  height: 36,
  padding: `0 ${vars.spacing.sm}`,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.colors.border}`,
  background: vars.colors.white,
  fontSize: vars.font.size.sm,
  color: vars.colors.label,
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: vars.colors.mainBorder,
      boxShadow: `0 0 0 3px ${vars.colors.mainXLight}`,
    },
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': { WebkitAppearance: 'none', margin: 0 },
    '&[type=number]': { MozAppearance: 'textfield' },
  },
})

export const pageTotalText = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
  marginRight: vars.spacing.md,
})
