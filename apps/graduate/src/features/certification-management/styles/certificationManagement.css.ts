import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const root = style({
  minHeight: '100dvh',
  backgroundColor: vars.colors.sub, 
  padding: vars.spacing.lg,
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
})



export const headerWrap = style({ 
  marginBottom: vars.spacing.md,
  marginTop: vars.spacing.lg,
 })
export const adminMark = style({
  color: vars.colors.label,
  fontSize: vars.font.size.sm,
  marginBottom: vars.spacing.xs,
})
export const title = style({
  fontSize: vars.font.size['2xl'],
  fontWeight: vars.font.weight.semibold ,
  color: vars.colors.label,
})


export const card = style({
  overflow: 'hidden',
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.colors.border}`,
  background: vars.colors.white,
  boxShadow: '0 1px 2px rgba(12, 20, 33, 0.06)',
})


