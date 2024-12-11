import { style } from '@vanilla-extract/css';
import { screen, themeVars } from '../../styles';

const breadcrumbList = style({
  display: themeVars.display.flex,
  flexWrap: themeVars.flexWrap.wrap,
  alignItems: themeVars.alignItems.center,
  gap: themeVars.spacing.sm,
  wordBreak: 'break-word',
  fontSize: themeVars.fontSize.sm,
  ...screen.sm({
    gap: '0.625rem',
  }),
});

const breadcrumbItem = style({
  display: themeVars.display.inlineFlex,
  alignItems: themeVars.alignItems.center,
  gap: '0.375rem',
});

const breadcrumbLink = style({
  transition: 'color 0.2s ease-in-out',
  color: themeVars.color.gray500,
  selectors: {
    '&:hover': {
      color: themeVars.color.black,
    },
  },
});

const breadcrumbPage = style({
  color: 'var(--foreground-color)',
  fontWeight: themeVars.fontWeight.regular,
});

const breadcrumbSeperator = style({
  color: themeVars.color.gray500,
});

export {
  breadcrumbList,
  breadcrumbItem,
  breadcrumbLink,
  breadcrumbPage,
  breadcrumbSeperator,
};
