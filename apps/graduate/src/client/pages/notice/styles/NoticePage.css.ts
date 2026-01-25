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
  paddingBottom: '120px',
  backgroundColor: vars.colors.sub,
  overflowY: 'auto',
});

export const noticeTitle = style({
  fontSize: vars.font.size['2xl'],
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  color: vars.colors.black,
  margin: 0,
  marginBottom: vars.spacing.md,

  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.font.size.xl,
    },
  },
});

export const tableWrapper = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.md,
  paddingBottom: vars.spacing.xl,
  marginBottom: vars.spacing.xl,
  overflow: 'hidden',

  '@media': {
    '(max-width: 768px)': {
      padding: vars.spacing.sm,
      paddingBottom: vars.spacing.lg,
      marginBottom: vars.spacing.lg,
      borderRadius: vars.radius.md,
    },
  },
});

export const titleCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const titleText = style({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const mobilePinnedTag = style({
  display: 'none',

  '@media': {
    '(max-width: 768px)': {
      display: 'inline-block',
      flexShrink: 0,
    },
  },
});

export const attachmentIcon = style({
  color: vars.colors.subDark,
  flexShrink: 0,
});

export const noticeTable = style({});

// Antd Table 스타일 커스터마이징
globalStyle(`${noticeTable} .ant-table`, {
  fontSize: vars.font.size.sm,
});

globalStyle(`${noticeTable} .ant-table-thead > tr > th`, {
  backgroundColor: vars.colors.sub,
  fontWeight: vars.font.weight.semibold,
  fontSize: vars.font.size.sm,
  color: vars.colors.black,
  borderBottom: `2px solid ${vars.colors.border}`,
});

globalStyle(`${noticeTable} .ant-table-tbody > tr:hover > td`, {
  backgroundColor: vars.colors.mainXLight,
});

globalStyle(`${noticeTable} .ant-table-tbody > tr > td`, {
  fontSize: vars.font.size.sm,
  padding: '12px 16px',
});

globalStyle(`${noticeTable} .ant-pagination`, {
  marginTop: vars.spacing.md,
});

// 모바일 스타일
globalStyle(`${noticeTable} .ant-table-wrapper`, {
  '@media': {
    '(max-width: 768px)': {
      overflow: 'auto',
    },
  },
});

globalStyle(`${tableWrapper} .ant-table-tbody > tr > td`, {
  '@media': {
    '(max-width: 768px)': {
      padding: '10px 8px',
      fontSize: vars.font.size.xs,
    },
  },
});

globalStyle(`${tableWrapper} .ant-table-thead > tr > th`, {
  '@media': {
    '(max-width: 768px)': {
      padding: '10px 8px',
      fontSize: vars.font.size.xs,
    },
  },
});
