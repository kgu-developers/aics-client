import { screen, themeVars } from '@aics-client/design-system/styles';
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
  },
  singleColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: themeVars.spacing.lg,
  },
});

const field = style({
  margin: '1.5rem 0',
});

const fieldTitle = style({
  width: '6rem',
  fontSize: themeVars.fontSize.lg,
  fontWeight: themeVars.fontWeight.semibold,
});

const editFieldWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const editFieldContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.lg,

  ...screen.md({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
});

const editField = style({
  width: '15rem',

  ...screen.md({
    width: '20rem',
  }),
});

const buttonWrapper = style({
  display: 'flex',
  gap: themeVars.spacing.sm,
  margin: '2rem 0',

  ...screen.md({
    display: 'flex',
    gap: themeVars.spacing.sm,
  }),
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
