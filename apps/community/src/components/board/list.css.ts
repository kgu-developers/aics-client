import { themeVars } from '@aics-client/design-system/styles';
import { globalStyle, style } from '@vanilla-extract/css';

const boardListWrapper = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  width: themeVars.width.full,
  borderTop: '1px solid',
  borderColor: themeVars.color.gray300,
});

const row = style({
  display: themeVars.display.flex,
  minWidth: themeVars.width.full,
  minHeight: '4rem',
  alignItems: themeVars.alignItems.center,
  gap: '1rem',
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
  '@media': {
    'screen and (max-width: 1280px)': {
      maxHeight: '2rem',
    },
  },
});

globalStyle(`${row} > * + *`, {
  textAlign: 'center',
});

const pin = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.center,
  width: '5%',
});

const rowTitle = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.start,
  alignItems: themeVars.alignItems.center,
  gap: '0.5rem',
  width: '75%',
  fontWeight: themeVars.fontWeight.semibold,
  '@media': {
    'screen and (max-width: 640px)': {
      width: '90%',
      justifyContent: themeVars.justifyContent.center,
    },
  },
});

const information = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.center,
  alignItems: themeVars.alignItems.center,
  width: '20%',
  gap: '1.75rem',
  fontSize: themeVars.fontSize.sm,

  '@media': {
    'screen and (max-width: 640px)': {
      visibility: 'hidden',
      width: '0%',
    },
    'screen and (max-width: 1280px)': {
      fontSize: themeVars.fontSize.xs,
    },
  },
});

const view = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.center,
  alignItems: themeVars.alignItems.center,
  gap: '0.25rem',
});

const author = style({
  '@media': {
    'screen and (max-width: 1280px)': {
      visibility: 'hidden',
      width: '0%',
    },
  },
});

export { boardListWrapper, row, pin, rowTitle, information, view, author };
