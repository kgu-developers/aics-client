import { themeVars } from '@aics-client/design-system/styles'
import { style } from '@vanilla-extract/css'

const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.5)',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.3s, visibility 0.3s',
})

const overlayVisible = style({
  opacity: 1,
  visibility: 'visible',
})

const drawer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  maxWidth: '300px',
  height: '100vh',
  backgroundColor: themeVars.color.white,
  transform: 'translateX(-100%)',
  transition: 'transform 0.3s',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
})

const drawerOpen = style({
  transform: 'translateX(0)',
})

const menuButton = style({
  visibility: 'visible',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1280px)': {
      visibility: 'hidden',
    },
  },
})

const closeButton = style({
  alignSelf: 'flex-end',
  background: 'none',
})

const navGroup = style({
  margin: '1rem 0',
})

const navGroupTitle = style({
  width: '100%',
  fontWeight: themeVars.fontWeight.semibold,
  textDecoration: 'none',
  display: 'flex',
  justifyContent: themeVars.justifyContent.between,
  padding: '0.5rem',
})

const navGroupLinks = style({
  paddingLeft: '1rem',
  maxHeight: 0,
  overflow: 'hidden',
  transition: 'max-height 0.5s ease-in-out',
})

const navGroupLinksOpen = style({
  maxHeight: '300px',
})

const navGroupLink = style({
  color: themeVars.color.gray800,
  fontSize: themeVars.fontSize.sm,
  textDecoration: 'none',
  display: 'block',
  padding: '0.5rem 0',
})

const chevron = style({
  transition: 'transform 0.3s',
})

const chevronOpen = style({
  transform: 'rotate(180deg)',
})

export {
  overlay,
  overlayVisible,
  drawer,
  drawerOpen,
  menuButton,
  closeButton,
  navGroup,
  navGroupLink,
  navGroupLinks,
  navGroupLinksOpen,
  navGroupTitle,
  chevron,
  chevronOpen,
}
