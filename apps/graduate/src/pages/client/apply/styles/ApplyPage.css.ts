import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  gap: vars.spacing.xl,
  padding: vars.spacing.xl,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.xl,
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
  border: `1px solid ${vars.colors.subHover}`,
  boxSizing: 'border-box',
});

export const button = style({
  width: '100%',
  height: '56px',
  borderRadius: vars.radius.lg,
  fontSize: vars.font.size.lg,
  fontWeight: 700,
  marginTop: vars.spacing.lg,
});

export const optionButton = style({
  width: '100%',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.subHover}`,
  color: vars.colors.subDark,
  transition: 'all 0.2s ease',
  fontWeight: 500,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.colors.sub,
    transform: 'translateY(-2px)',
  },
});

export const activeOptionButton = style({
  width: '100%',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.colors.mainXLight,
  border: `2px solid ${vars.colors.main}`,
  color: vars.colors.main,
  transition: 'all 0.2s ease',
  fontWeight: 700,
  boxShadow: '0 4px 12px rgba(0, 106, 228, 0.1)',
  cursor: 'pointer',
});

export const drawer = style({
  width: '786px',
  margin: '0 auto',
  boxShadow: 'none',
  borderRadius: '16px 16px 0 0',
  display: 'flex',
});

export const drawerTitle = style({
  fontSize: 20,
  marginBottom: 4,
  fontVariationSettings: `'wght' 600`,
});

export const drawerDescription = style({
  marginBottom: 20,
});

export const submitButton = style({
  padding: 20,
  borderRadius: 12,
  width: '100%',
});
