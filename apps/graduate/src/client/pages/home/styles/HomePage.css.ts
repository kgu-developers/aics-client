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
  backgroundColor: vars.colors.sub,
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
  background: `linear-gradient(135deg, ${vars.colors.main} 0%, #0054B3 100%)`,
  borderRadius: vars.radius.lg,
  color: vars.colors.white,
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: `1px solid ${vars.colors.mainBorder}`,

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 100%)',
    pointerEvents: 'none',
  },
});

export const carouselSlide = style({
  padding: `${vars.spacing.lg} ${vars.spacing.xl} 48px`,
  minHeight: '180px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'relative',

  '@media': {
    '(max-width: 768px)': {
      padding: `${vars.spacing.md} ${vars.spacing.lg} 40px`,
      minHeight: '160px',
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
  fontSize: '26px',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  lineHeight: '1.3',
  letterSpacing: '-0.5px',
  margin: 0,
  color: vars.colors.white,

  '@media': {
    '(max-width: 768px)': {
      fontSize: '20px',
      letterSpacing: '-0.3px',
    },
  },
});

export const headerDescription = style({
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.9)',
  lineHeight: '1.6',
  fontVariationSettings: `'wght' ${vars.font.weight.normal}`,
  marginTop: vars.spacing.xs,

  '@media': {
    '(max-width: 768px)': {
      fontSize: '13px',
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
  border: `1px solid ${vars.colors.border}`,
  cursor: 'pointer',
  width: '100%',
  height: '76px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.colors.white,
  color: vars.colors.main,
  padding: vars.spacing.md,
  gap: vars.spacing.md,
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: vars.colors.mainXLight,
    borderColor: vars.colors.mainBorder,
    color: vars.colors.mainDark,
  },

  ':active': {
    transform: 'scale(0.98)',
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
  fontSize: '11px',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  color: vars.colors.white,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  padding: '5px 10px',
  borderRadius: vars.radius.sm,
  marginBottom: vars.spacing.sm,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  width: 'fit-content',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
});

export const pinnedBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '11px',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  color: vars.colors.white,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  padding: '5px 12px',
  borderRadius: vars.radius.sm,
  marginBottom: vars.spacing.sm,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  width: 'fit-content',
  letterSpacing: '0.3px',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
});

export const headerText = style({
  margin: 0,
  fontSize: '18px',
  color: '#1F2937',
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  letterSpacing: '-0.3px',
});

export const noticeSection = style({
  border: `1px solid ${vars.colors.border}`,
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
  backgroundColor: vars.colors.sub,
  gap: vars.spacing.xs,
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  border: `1px solid ${vars.colors.border}`,
  position: 'relative',
  overflow: 'hidden',

  '::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '3px',
    backgroundColor: vars.colors.main,
    transform: 'scaleY(0)',
    transition: 'transform 0.2s ease',
  },

  ':hover': {
    transform: 'translateX(4px)',
    backgroundColor: vars.colors.mainXLight,
    borderColor: vars.colors.mainBorder,
  },
});

export const noticeTop = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const noticeBadge = style({
  background: vars.colors.main,
  color: vars.colors.white,
  padding: '3px 10px',
  borderRadius: vars.radius.sm,
  fontSize: '11px',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
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
  color: vars.colors.main,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  transition: 'all 0.2s ease',

  ':hover': {
    color: vars.colors.mainDark,
    transform: 'translateX(2px)',
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


// Notice item hover effect
globalStyle(`${noticeItem}:hover::before`, {
  transform: 'scaleY(1)',
});
