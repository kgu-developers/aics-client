import { style, globalStyle } from '@vanilla-extract/css';

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
  background: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`,
  borderRadius: vars.radius.lg,
  color: vars.colors.white,
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
});

export const carouselSlide = style({
  padding: `${vars.spacing.xl} ${vars.spacing.xl} 48px`,
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'relative',

  '@media': {
    '(max-width: 768px)': {
      padding: `${vars.spacing.lg} ${vars.spacing.lg} 40px`,
      minHeight: '180px',
    },
  },
});

export const headerTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  zIndex: 1,
  width: '100%',
  position: 'relative',
});

export const headerTitle = style({
  fontSize: '28px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  lineHeight: '1.2',
  letterSpacing: '-0.8px',
  margin: 0,
  color: vars.colors.white,
  textShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',

  '@media': {
    '(max-width: 768px)': {
      fontSize: '22px',
      letterSpacing: '-0.6px',
    },
  },
});

export const headerDescription = style({
  fontSize: '15px',
  color: 'rgba(255, 255, 255, 0.95)',
  lineHeight: '1.7',
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  textShadow: '0 1px 10px rgba(0, 0, 0, 0.15)',
  marginTop: vars.spacing.xs,

  '@media': {
    '(max-width: 768px)': {
      fontSize: '14px',
    },
  },
});

export const homeButtonSection = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.sm,
  width: '100%',
  zIndex: 1,
});

export const homeButton = style({
  cursor: 'pointer',
  width: '100%',
  height: '76px',
  border: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.colors.white,
  color: '#667eea',
  padding: vars.spacing.md,
  gap: vars.spacing.md,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent)',
    transition: 'left 0.5s ease',
  },

  ':hover': {
    backgroundColor: '#f7f9ff',
    transform: 'translateY(-3px)',
    color: '#5568d3',
  },

  ':active': {
    transform: 'translateY(-1px) scale(0.98)',
  },

  '@media': {
    '(max-width: 768px)': {
      height: '68px',
    },
  },
});

export const homeButtonIcon = style({
  fontSize: '20px',
  flexShrink: 0,
  transition: 'transform 0.3s ease',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
});

export const homeButtonLabel = style({
  fontSize: '14px',
  textAlign: 'left',
  wordBreak: 'keep-all',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  lineHeight: '1.3',
  letterSpacing: '-0.2px',
});

export const statusBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '12px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  color: 'rgba(255, 255, 255, 0.95)',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  padding: '6px 12px',
  borderRadius: vars.radius.md,
  marginBottom: vars.spacing.md,
  border: '1px solid rgba(255, 255, 255, 0.25)',
  width: 'fit-content',
  letterSpacing: '0.3px',
  textTransform: 'uppercase',
});

export const pinnedBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '13px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  color: vars.colors.white,
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(10px)',
  padding: '7px 14px',
  borderRadius: vars.radius.lg,
  marginBottom: vars.spacing.md,
  border: '1px solid rgba(255, 255, 255, 0.3)',
  width: 'fit-content',
  letterSpacing: '0.2px',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    transform: 'translateY(-1px)',
  },
});

export const scheduleCard = style({
  flex: 1,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  boxSizing: 'border-box',
  overflow: 'hidden',
  border: '1px solid rgba(102, 126, 234, 0.08)',
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
  margin: 0,
  fontSize: '18px',
  color: '#1F2937',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  letterSpacing: '-0.3px',
});

export const noticeSection = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  marginBottom: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  boxSizing: 'border-box',

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
  borderRadius: vars.radius.lg,
  backgroundColor: '#f8f9ff',
  gap: vars.spacing.xs,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  position: 'relative',
  overflow: 'hidden',

  '::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '3px',
    backgroundColor: '#667eea',
    transform: 'scaleY(0)',
    transition: 'transform 0.3s ease',
  },

  ':hover': {
    transform: 'translateX(6px)',
    backgroundColor: '#f0f3ff',
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
});

export const noticeTop = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const noticeBadge = style({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: vars.colors.white,
  padding: '3px 10px',
  borderRadius: vars.radius.md,
  fontSize: '11px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  letterSpacing: '0.3px',
});

export const noticeTitle = style({
  fontSize: '15px',
  color: '#1F2937',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  flex: 1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  letterSpacing: '-0.2px',
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
  color: '#667eea',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  transition: 'all 0.2s ease',

  ':hover': {
    color: '#5568d3',
    transform: 'translateX(2px)',
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
  borderRadius: vars.radius.lg,
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
});

export const calendarDateNormal = style({
  color: '#1A1C1E',
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: '#F1F4F9',
  },
});

// Carousel dots 스타일 커스터마이징
globalStyle(`${header} .slick-dots`, {
  bottom: '20px',
  display: 'flex !important',
  justifyContent: 'center',
  gap: '6px',
});

globalStyle(`${header} .slick-dots li`, {
  margin: '0',
  width: 'auto',
});

globalStyle(`${header} .slick-dots li button`, {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
});

globalStyle(`${header} .slick-dots li button:hover`, {
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  transform: 'scale(1.2)',
});

globalStyle(`${header} .slick-dots li.slick-active button`, {
  width: '32px',
  borderRadius: '3px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
});

// Button hover shimmer effect
globalStyle(`${homeButton}:hover::before`, {
  left: '100%',
});

// Notice item hover effect
globalStyle(`${noticeItem}:hover::before`, {
  transform: 'scaleY(1)',
});
