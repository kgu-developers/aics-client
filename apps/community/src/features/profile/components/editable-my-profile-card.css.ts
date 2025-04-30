import { style } from '@vanilla-extract/css'

import { themeVars } from '@aics-client/design-system/styles'

const fieldTitle = style({
  width: '6rem',
  fontSize: themeVars.fontSize.lg,
  fontWeight: themeVars.fontWeight.semibold,
})

const editFieldWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const editField = style({
  margin: '1.5rem 0',
  width: '20rem',
})

export { fieldTitle, editFieldWrapper, editField }
