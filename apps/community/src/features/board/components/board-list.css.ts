import { globalStyle, style } from '@vanilla-extract/css'

import { screen, themeVars } from '@aics-client/design-system/styles'

const boardListWrapper = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  width: themeVars.width.full,
  borderTop: '1px solid',
  borderColor: themeVars.color.gray300,
})

const row = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
  minWidth: themeVars.width.full,
  maxHeight: '4rem',
  gap: themeVars.spacing.md,
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid',
  borderColor: themeVars.color.gray300,
  textOverflow: 'ellipsis',
  selectors: {
    '&:hover': {
      backgroundColor: themeVars.color.gray100,
    },
  },

  ...screen.xl({
    minHeight: '3.5rem',
  }),
})

globalStyle(`${row} > * + *`, {
  textAlign: 'center',
})

const pin = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.center,
  width: '5%',
})

const rowTitle = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.center,
  alignItems: themeVars.alignItems.center,
  width: '90%',
  gap: themeVars.spacing.sm,
  fontWeight: themeVars.fontWeight.semibold,

  ...screen.md({
    width: '60%',
    justifyContent: themeVars.justifyContent.start,
  }),
})

const information = style({
  width: '0%',
  visibility: 'hidden',

  ...screen.md({
    display: themeVars.display.flex,
    justifyContent: themeVars.justifyContent.end,
    alignItems: themeVars.alignItems.center,
    width: '35%',
    visibility: 'visible',
    fontSize: themeVars.fontSize.xs,
    gap: '0.75rem',
    paddingRight: '1.5rem',
  }),
})

const view = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.center,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.xs,
})

const author = style({
  width: '0%',
  visibility: 'hidden',

  ...screen.xl({
    visibility: 'visible',
    width: 'auto',
  }),
})

export { boardListWrapper, row, pin, rowTitle, information, view, author }
