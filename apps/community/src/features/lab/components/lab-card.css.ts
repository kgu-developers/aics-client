import { themeVars } from '@aics-client/design-system/styles';
import { style } from '@vanilla-extract/css';


const cardWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '2rem 1rem 2rem 3rem',
  gap: '3rem',
  border: `1px solid ${themeVars.color.gray300}`,
  borderRadius: themeVars.borderRadius.lg,
  boxShadow: themeVars.boxShadow.md,
});

const image = style({
  objectFit: 'contain',
});

const divider = style({
  width: 1,
  height: '100%',
  backgroundImage:
    'repeating-linear-gradient(#000, #000 1px, transparent 1px, transparent 3px)',
  opacity: 0.5,
});

const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: themeVars.spacing.md,
});

const title = style({
  marginBottom: themeVars.spacing.lg,
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.semibold,
  color: '#333D4B',
});

const link = style({
  textDecoration: 'underline',

  ':hover': {
    color: themeVars.color.primary,
    transition: 'color 0.3s',
  },
});

export { cardWrapper, image, divider, infoWrapper, title, link };
