import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const mainSection = style({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
  padding: vars.spacing.lg,
  paddingBottom: 0,
  backgroundColor: '#F8F9FB',
  overflowY: 'auto',
  overflowX: 'hidden',

  '@media': {
    '(min-width: 768px)': {
      paddingLeft: vars.spacing.xl,
      paddingRight: vars.spacing.xl,
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
});

export const upperSection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  boxSizing: 'border-box',
});

export const header = style({
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  background: `linear-gradient(135deg, ${vars.colors.main} 0%, #3B82F6 100%)`,
  borderRadius: '24px',
  padding: vars.spacing.xl,
  color: vars.colors.white,
  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.25)',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
});

export const headerTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  marginBottom: vars.spacing.xl,
  zIndex: 1,
});

export const headerTitle = style({
  fontSize: '28px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  lineHeight: '1.3',
  letterSpacing: '-0.5px',
});

export const headerDescription = style({
  fontSize: vars.font.size.md,
  color: 'rgba(255, 255, 255, 0.9)',
  lineHeight: '1.6',
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
});

export const homeButtonSection = style({
  display: 'flex',
  gap: vars.spacing.sm,
  width: '100%',
  zIndex: 1,

  '@media': {
    '(min-width: 480px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const homeButton = style({
  cursor: 'pointer',
  width: '100%',
  aspectRatio: '1/1',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(8px)',
  color: vars.colors.white,
  padding: vars.spacing.md,
  gap: vars.spacing.xs,
  transition: 'all 0.2s ease-in-out',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'scale(0.96)',
  },
});

export const homeButtonIcon = style({
  fontSize: '24px',
  marginBottom: vars.spacing.xs,
});

export const homeButtonLabel = style({
  fontSize: '13px',
  textAlign: 'center',
  wordBreak: 'keep-all',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
});

export const scheduleCard = style({
  flex: 1,
  backgroundColor: vars.colors.white,
  borderRadius: '24px',
  padding: vars.spacing.xl,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  boxSizing: 'border-box', // Ensure padding doesn't increase width
  overflow: 'hidden', // Prevent internal elements from overflowing
});

export const scheduleHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing.sm,
});

export const headerDate = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

export const headerText = style({
  fontSize: vars.font.size.lg,
  color: '#1A1C1E',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
});

export const noticeSection = style({
  backgroundColor: vars.colors.white,
  borderRadius: '24px',
  padding: vars.spacing.xl,
  marginBottom: vars.spacing.xl,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  boxSizing: 'border-box',
  overflow: 'hidden',

  '@media': {
    '(max-width: 768px)': {
      marginBottom: vars.spacing.lg,
    },
  },
});

export const noticeList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
});

export const noticeItem = style({
  display: 'flex',
  flexDirection: 'column',
  padding: vars.spacing.md,
  borderRadius: '16px',
  backgroundColor: '#F1F4F9',
  gap: vars.spacing.xs,
  transition: 'transform 0.2s ease',
  cursor: 'pointer',

  ':hover': {
    transform: 'translateX(4px)',
    backgroundColor: '#E9EEF6',
  },
});

export const noticeTop = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
});

export const noticeBadge = style({
  backgroundColor: vars.colors.main,
  color: vars.colors.white,
  padding: '2px 8px',
  borderRadius: '6px',
  fontSize: '11px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
});

export const noticeTitle = style({
  fontSize: vars.font.size.md,
  color: '#1A1C1E',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  flex: 1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const noticeBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '13px',
  color: vars.colors.subDark,
});

export const noticeAction = style({
  border: 'none',
  background: 'none',
  fontSize: vars.font.size.sm,
  color: vars.colors.main,
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  ':hover': {
    opacity: 0.8,
  },
});

export const calendarWrapper = style({
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const calendarGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  columnGap: '8px',
  textAlign: 'center',
});

export const calendarDayLabel = style({
  fontSize: '12px',
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  color: vars.colors.subDark,
});

export const calendarDateCircle = style({
  width: '36px',
  height: '36px',
  borderRadius: '12px', // More modern rounded square/circle hybrid
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  transition: 'all 0.2s ease',
});

export const calendarDateToday = style({
  color: vars.colors.white,
  backgroundColor: vars.colors.main,
  boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
});

export const calendarDateNormal = style({
  color: '#1A1C1E',
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: '#F1F4F9',
  },
});
