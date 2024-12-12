import { style } from '@vanilla-extract/css';

import { screen, themeVars } from '@aics-client/design-system/styles';

const border = style({
  fontWeight: themeVars.fontWeight.semibold,
});

const content = style({
  borderBottom: `1px solid ${themeVars.color.gray200}`,
  padding: '3rem 1rem',
  whiteSpace: 'pre-line',
});

const createdAt = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.xs,
});

const file = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
  justifySelf: 'end',
  padding: '0.5rem 1rem',
  fontSize: themeVars.fontSize.sm,
  fontWeight: themeVars.fontWeight.semibold,
  gap: themeVars.spacing.xs,
});

const flex = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.xl,
});

const footer = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  gap: themeVars.spacing.xl,
  alignItems: themeVars.alignItems.start,
});

const goToListButton = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.sm,
  fontSize: themeVars.fontSize.sm,
});

const informationWrapper = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.between,
  borderTop: `1px solid ${themeVars.color.gray200}`,
  padding: '1rem 1rem 0.5rem 1rem',
  color: themeVars.color.gray500,
  fontSize: themeVars.fontSize.sm,
});

const nextPost = style({
  display: themeVars.display.flex,
  gap: themeVars.spacing.lg,
  borderTop: `1px solid ${themeVars.color.gray200}`,
  borderBottom: `1px solid ${themeVars.color.gray200}`,
  padding: '1.25rem',
});

const noPost = style({
  padding: '1.25rem',
  userSelect: 'none',
});

const postItems = style({
  width: themeVars.width.full,
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
});

const prevPost = style({
  display: themeVars.display.flex,
  gap: themeVars.spacing.lg,
  padding: '1.25rem',
});

const title = style({
  fontWeight: themeVars.fontWeight.semibold,
  fontSize: '2rem',
  padding: '2rem 1rem 1rem 1rem',
});

const views = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.xs,
  visibility: 'hidden',
  ...screen.sm({
    visibility: 'visible',
  }),
});

export {
  border,
  content,
  createdAt,
  file,
  flex,
  footer,
  goToListButton,
  informationWrapper,
  nextPost,
  noPost,
  postItems,
  prevPost,
  title,
  views,
};
