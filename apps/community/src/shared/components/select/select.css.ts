import { themeVars } from '@aics-client/design-system/styles'
import { style } from '@vanilla-extract/css'

const selectWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.xs,
})

const selectContainer = style({
  position: 'relative',
  width: themeVars.width.full,
})

const selectButton = style({
  width: themeVars.width.full,
  padding: themeVars.spacing.md,
  border: `1px solid ${themeVars.color.gray200}`,
  borderRadius: themeVars.borderRadius.lg,
  background: themeVars.color.white,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: themeVars.boxShadow.sm,
})

const dropdownList = style({
  position: 'absolute',
  zIndex: 10,
  width: themeVars.width.full,
  border: `1px solid ${themeVars.color.gray200}`,
  borderRadius: themeVars.borderRadius.lg,
  boxShadow: themeVars.boxShadow.sm,
  backgroundColor: themeVars.color.white,
  listStyle: 'none',
  maxHeight: '10rem',
  overflowY: 'auto',
})

const dropdownItem = style({
  padding: themeVars.spacing.md,
  cursor: 'pointer',
  ':hover': {
    background: themeVars.color.gray100,
  },
})

const selectedItem = style({
  background: themeVars.color.gray200,
})

const message = style({
  fontSize: themeVars.fontSize.sm,
  color: themeVars.color.orange500,
  marginTop: themeVars.spacing.xs,
})

const label = style({
  fontSize: themeVars.fontSize.sm,
  color: themeVars.color.gray900,
})

export {
  selectWrapper,
  selectContainer,
  selectButton,
  dropdownList,
  dropdownItem,
  selectedItem,
  message,
  label,
}
