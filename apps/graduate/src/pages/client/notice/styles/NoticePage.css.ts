import { style, globalStyle } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const mainSection = style({
  position: 'absolute',
  top: vars.spacing.header,
  width: '100dvw',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 800,
  padding: vars.spacing.lg,
  minHeight: `calc(100dvh - ${vars.spacing.header})`,
  backgroundColor: vars.colors.sub,

  '@media': {
    '(max-width: 768px)': {
      padding: vars.spacing.md,
      gap: vars.spacing.md,
    },
  },
});

export const noticeTitle = style({
  fontSize: vars.font.size['2xl'],
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  color: vars.colors.black,
  margin: 0,

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
  overflow: 'hidden',

  '@media': {
    '(max-width: 768px)': {
      padding: vars.spacing.sm,
      borderRadius: vars.radius.md,
    },
  },
});

export const loadingContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
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
