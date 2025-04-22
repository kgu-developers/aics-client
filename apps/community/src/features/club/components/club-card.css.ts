import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';

const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.lg,
  padding: themeVars.spacing.lg,
  border: `1px solid ${themeVars.color.gray300}`,
  borderRadius: themeVars.borderRadius.xl,
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
});

const cardImage = style({
  width: '100%',
  borderRadius: themeVars.borderRadius.md,
});

const cardBodyWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.sm,
});

const cardTitle = style({
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.bold,
});

const cardLinkWrapper = style({
  display: 'flex',
  gap: themeVars.spacing.sm,
  alignItems: 'center',
});

const cardHomeLink = style({
  color: themeVars.color.black,
  textDecoration: 'underline',
});

export {
  cardWrapper,
  cardImage,
  cardBodyWrapper,
  cardLinkWrapper,
  cardTitle,
  cardHomeLink,
};
