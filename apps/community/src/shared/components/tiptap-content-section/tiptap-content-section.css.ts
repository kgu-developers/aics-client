import { themeVars } from '@aics-client/design-system/styles';
import { globalStyle, style } from '@vanilla-extract/css';


const information = style({
  display: themeVars.display.flex,
  flexDirection: themeVars.flexDirection.column,
  gap: themeVars.spacing.md,
  color: themeVars.color.gray800,
});

globalStyle(`${information} h1`, {
  fontSize: themeVars.fontSize['2xl'],
  fontWeight: themeVars.fontWeight.semibold,
  margin: 0,
});

globalStyle(`${information} h2`, {
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.semibold,
  margin: 0,
});

globalStyle(`${information} h3`, {
  fontSize: themeVars.fontSize.lg,
  fontWeight: themeVars.fontWeight.semibold,
  margin: 0,
});

globalStyle(`${information} p`, {
  margin: 0,
  lineHeight: '1.5rem',
});

globalStyle(`${information} ul`, {
  listStyleType: 'disc',
  paddingLeft: themeVars.spacing.lg,
  margin: 0,
});

globalStyle(`${information} ol`, {
  listStyleType: 'demical',
  paddingLeft: themeVars.spacing.lg,
  margin: 0,
});

globalStyle(`${information} li`, {
  marginBottom: themeVars.spacing.sm,
  lineHeight: 1.5,
});

export { information };
