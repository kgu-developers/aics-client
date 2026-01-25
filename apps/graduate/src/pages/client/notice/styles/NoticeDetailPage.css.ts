import { style, globalStyle } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const mainSection = style({
  position: 'absolute',
  width: '100dvw',
  height: `calc(100dvh - ${vars.spacing.header})`,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 800,
  padding: vars.spacing.lg,
  paddingBottom: 0,
  backgroundColor: vars.colors.sub,
  gap: vars.spacing.md,
  overflowY: 'auto',
});

export const loadingContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  marginBottom: vars.spacing.xl,
});

export const errorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.spacing.md,
  minHeight: '400px',
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  marginBottom: vars.spacing.xl,
});

export const backButtonWrapper = style({
  marginBottom: vars.spacing.sm,
});

export const backButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  fontSize: vars.font.size.md,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  color: vars.colors.subText,
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,

  ':hover': {
    color: vars.colors.main,
  },
});

export const noticeContainer = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.xl,
  paddingBottom: vars.spacing.xl,
  marginBottom: vars.spacing.xl,
  boxSizing: 'border-box',

  '@media': {
    '(max-width: 768px)': {
      padding: vars.spacing.lg,
      paddingBottom: vars.spacing.lg,
      marginBottom: vars.spacing.lg,
    },
  },
});

export const noticeHeader = style({
  marginBottom: vars.spacing.md,
});

export const titleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  marginBottom: vars.spacing.md,
  flexWrap: 'wrap',
});

export const pinnedTag = style({
  fontSize: vars.font.size.sm,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
});

export const noticeTitle = style({
  fontSize: vars.font.size['3xl'],
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  color: vars.colors.black,
  margin: 0,
  lineHeight: '1.4',

  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.font.size['2xl'],
    },
  },
});

export const metaInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
  flexWrap: 'wrap',
});

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
});

export const metaDivider = style({
  color: vars.colors.border,

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const divider = style({
  margin: `${vars.spacing.md} 0`,
  borderColor: vars.colors.border,
});

export const attachmentSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: vars.spacing.md,
  backgroundColor: vars.colors.sub,
  borderRadius: vars.radius.md,
  marginBottom: vars.spacing.lg,

  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: vars.spacing.sm,
      alignItems: 'flex-start',
    },
  },
});

export const attachmentInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  color: vars.colors.subText,
  fontSize: vars.font.size.md,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
});

export const noticeContent = style({
  fontSize: vars.font.size.md,
  lineHeight: '1.8',
  color: vars.colors.black,
  minHeight: '300px',
  wordBreak: 'break-word',
});

// 컨텐츠 내부 HTML 스타일링
globalStyle(`${noticeContent} p`, {
  marginBottom: vars.spacing.md,
});

globalStyle(`${noticeContent} img`, {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: vars.radius.md,
  marginTop: vars.spacing.md,
  marginBottom: vars.spacing.md,
});

globalStyle(`${noticeContent} a`, {
  color: vars.colors.main,
  textDecoration: 'underline',
});

globalStyle(`${noticeContent} a:hover`, {
  color: vars.colors.mainDark,
});

globalStyle(`${noticeContent} ul, ${noticeContent} ol`, {
  paddingLeft: vars.spacing.xl,
  marginBottom: vars.spacing.md,
});

globalStyle(`${noticeContent} li`, {
  marginBottom: vars.spacing.xs,
});

globalStyle(`${noticeContent} h1, ${noticeContent} h2, ${noticeContent} h3`, {
  marginTop: vars.spacing.lg,
  marginBottom: vars.spacing.md,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
});

globalStyle(`${noticeContent} blockquote`, {
  borderLeft: `4px solid ${vars.colors.main}`,
  paddingLeft: vars.spacing.md,
  marginLeft: 0,
  marginRight: 0,
  color: vars.colors.subText,
  fontStyle: 'italic',
});

globalStyle(`${noticeContent} code`, {
  backgroundColor: vars.colors.sub,
  padding: `2px ${vars.spacing.xs}`,
  borderRadius: vars.radius.sm,
  fontSize: vars.font.size.sm,
  fontFamily: 'monospace',
});

globalStyle(`${noticeContent} pre`, {
  backgroundColor: vars.colors.sub,
  padding: vars.spacing.md,
  borderRadius: vars.radius.md,
  overflow: 'auto',
  marginBottom: vars.spacing.md,
});
