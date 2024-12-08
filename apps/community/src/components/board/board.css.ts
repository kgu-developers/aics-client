import { style } from '@vanilla-extract/css';

import { screen, themeVars } from '@aics-client/design-system/styles';

const title = style({
  fontWeight: themeVars.fontWeight.semibold,
  fontSize: '2rem',
  padding: '2rem 1rem 1rem 1rem',
});

const informationWrapper = style({
  display: themeVars.display.flex,
  justifyContent: themeVars.justifyContent.between,
  borderTop: `1px solid ${themeVars.color.gray200}`,
  padding: '1rem 1rem 0.5rem 1rem',
  color: themeVars.color.gray500,
  fontSize: themeVars.fontSize.sm,
});

const flex = style({
  display: themeVars.display.flex,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.xl,
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

const content = style({
  padding: '3rem 1rem 0 1rem',
  whiteSpace: 'pre-line',
});

export { title, informationWrapper, flex, views, createdAt, file, content };
