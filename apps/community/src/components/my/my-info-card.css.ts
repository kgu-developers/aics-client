import { themeVars } from '@aics-client/design-system/styles';
import { style, styleVariants } from '@vanilla-extract/css';

const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.lg,
  marginBottom: themeVars.spacing.xl,
  padding: themeVars.spacing.xl,
  border: `1px solid ${themeVars.color.gray300}`,
  borderRadius: themeVars.borderRadius.xl,
  boxShadow: themeVars.boxShadow.md,
});

const cardTitle = style({
  marginBottom: themeVars.spacing.lg,
  fontSize: themeVars.fontSize.xl,
  fontWeight: themeVars.fontWeight.bold,
});

const cardContent = styleVariants({
  default: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: themeVars.spacing.lg,
    fontSize: themeVars.fontSize.lg,
  },
  singleColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: themeVars.spacing.md,
    fontSize: themeVars.fontSize.lg,
  },
});

const field = style({
  margin: '1.5rem 0',
  padding: 0,
  fontSize: themeVars.fontSize.md,
});

const fieldTitle = style({
  width: '6rem',
  fontWeight: themeVars.fontWeight.semibold,
  marginBottom: 0,
});

const editFieldWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const editFieldContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: themeVars.spacing.md,
});

const editField = style({
  width: '25rem',
  fontSize: themeVars.fontSize.md,
});

const buttonWrapper = style({
  display: 'flex',
  gap: themeVars.spacing.sm,
});

export {
  cardWrapper,
  cardTitle,
  cardContent,
  field,
  fieldTitle,
  editFieldWrapper,
  editFieldContent,
  editField,
  buttonWrapper,
};
