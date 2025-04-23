import { style } from '@vanilla-extract/css'

import { themeVars } from '@aics-client/design-system/styles'

const headerWrapper = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  transition: 'padding 0.3s',
})

const headerWrapperScrolled = style({
  paddingTop: '1rem',
})

const header = style({
  display: 'flex',
  padding: '0.75rem',
  alignItems: themeVars.alignItems.center,
  justifyContent: themeVars.justifyContent.between,
  backgroundColor: themeVars.color.white,
  borderRadius: themeVars.borderRadius.xl,
  transition: 'padding 0.3s, box-shadow 0.3s',
  '@media': {
    'screen and (min-width: 1280px)': {
      padding: '1rem 1.5rem',
    },
  },
})

const headerScrolled = style({
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
})

const buttonContainer = style({
  width: '20%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: themeVars.alignItems.end,
})

const signInButton = style({
  padding: '0.5rem 0.75rem',
  borderRadius: themeVars.borderRadius.md,
  backgroundColor: themeVars.color.gray900,
  fontSize: themeVars.fontSize.xs,
  fontWeight: themeVars.fontWeight.semibold,
  color: themeVars.color.white,
  ':hover': {
    backgroundColor: themeVars.color.gray800,
  },
})

const logoutButton = style({
  visibility: 'hidden',
  fontSize: themeVars.fontSize.xs,
  fontWeight: themeVars.fontWeight.semibold,
  color: themeVars.color.gray700,
  ':hover': {
    color: themeVars.color.black,
  },
  '@media': {
    'screen and (min-width: 1280px)': {
      visibility: 'visible',
    },
  },
})

export {
  headerWrapper,
  headerWrapperScrolled,
  header,
  headerScrolled,
  buttonContainer,
  signInButton,
  logoutButton,
}
