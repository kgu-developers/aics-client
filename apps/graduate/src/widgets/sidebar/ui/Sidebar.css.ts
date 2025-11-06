import { style } from '@vanilla-extract/css'

import { vars } from '~/vars.css'

export const sidebar = style({
  width: '250px',
  height: '100vh',
  backgroundColor: vars.colors.white,
  borderRight: `1px solid ${vars.colors.border}`,
  display: 'flex',
  flexDirection: 'column',
})

export const sidebarHeader = style({
  padding: vars.spacing.lg,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const logoImage = style({
  width: '250px',
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
})

export const sidebarMenu = style({
  flex: 1,
  padding: `${vars.spacing.lg} `,
})

export const menuSection = style({
  marginBottom: vars.spacing.xl,
})

export const sectionTitle = style({
  fontSize: vars.font.size.md,
  color: vars.colors.subDark,
  marginBottom: vars.spacing.sm,
  padding: `0 ${vars.spacing.lg}`,
})

export const sectionItems = style({
  display: 'flex',
  flexDirection: 'column',
})

export const menuItem = style({
  marginBottom: vars.spacing.xs,
})

export const menuLink = style({
  display: 'block',
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  color: vars.colors.black,
  textDecoration: 'none',
  fontSize: vars.font.size.xl,
  fontWeight: vars.font.weight.semibold,

  transition:
    'color .15s ease, transform .15s ease, text-decoration-color .15s ease',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      transform: 'scale(1.02)',
    },
    '&:active': {
      color: vars.colors.mainDark,
      transform: 'scale(0.98)',
    },
  },
})
export const active = style({
  color: vars.colors.main,
  fontWeight: vars.font.weight.bold,
  textDecoration: 'underline',
})
