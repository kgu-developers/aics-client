import { style, globalStyle } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const mainSection = style({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: vars.spacing.lg,
  paddingBottom: vars.spacing.xl,
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

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const pageTitle = style({
  fontSize: vars.font.size['2xl'],
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  color: vars.colors.black,
  margin: 0,
  marginBottom: vars.spacing.xs,
});

export const pageSubtitle = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
  margin: 0,
  marginBottom: vars.spacing.sm,
});

export const calendarWrapper = style({
  marginBottom: vars.spacing.lg,
});

export const bigCalendar = style({
  width: '100%',
  height: '600px',

  '@media': {
    '(max-width: 767px)': {
      height: '500px',
    },
  },
});

export const scheduleDetail = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  border: `1px solid ${vars.colors.border}`,
});

export const detailTitle = style({
  fontSize: vars.font.size.lg,
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  color: vars.colors.black,
  margin: 0,
  marginBottom: vars.spacing.md,
});

export const scheduleList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const scheduleItem = style({
  padding: vars.spacing.md,
  backgroundColor: vars.colors.sub,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.colors.border}`,
  transition: 'all 0.2s ease',

  ':hover': {
    borderColor: vars.colors.mainBorder,
    backgroundColor: vars.colors.mainXLight,
  },
});

export const scheduleItemHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing.xs,
  gap: vars.spacing.sm,
});

export const scheduleTitle = style({
  fontSize: vars.font.size.md,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  color: vars.colors.black,
  margin: 0,
});

export const scheduleStatus = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.main,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  padding: '4px 10px',
  backgroundColor: vars.colors.mainXLight,
  borderRadius: vars.radius.sm,
  flexShrink: 0,
});

export const schedulePeriod = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.subDark,
});

// React Big Calendar 스타일 커스터마이징
globalStyle(`${bigCalendar} .rbc-header`, {
  padding: vars.spacing.sm,
  fontSize: vars.font.size.sm,
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  color: vars.colors.black,
  borderBottom: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.sub,
});

globalStyle(`${bigCalendar} .rbc-month-view`, {
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
});

globalStyle(`${bigCalendar} .rbc-date-cell`, {
  padding: '4px 6px',
  fontSize: vars.font.size.sm,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
  backgroundColor: vars.colors.white,
});

globalStyle(`${bigCalendar} .rbc-today`, {
  backgroundColor: vars.colors.mainXLight,
});

globalStyle(`${bigCalendar} .rbc-off-range`, {
  color: vars.colors.subDark,
  backgroundColor: vars.colors.sub,
});

globalStyle(`${bigCalendar} .rbc-event`, {
  borderRadius: vars.radius.sm,
  padding: '2px 4px',
  fontSize: '10px',
});

globalStyle(`${bigCalendar} .rbc-event:hover`, {
  opacity: 0.9,
});

globalStyle(`${bigCalendar} .rbc-event-label`, {
  display: 'none',
});

globalStyle(`${bigCalendar} .rbc-event-content`, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

globalStyle(`${bigCalendar} .rbc-toolbar`, {
  marginBottom: vars.spacing.md,
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
  paddingBottom: vars.spacing.sm,
  borderBottom: `1px solid ${vars.colors.border}`,
});

globalStyle(`${bigCalendar} .rbc-btn-group`, {
  display: 'flex',
  gap: '6px',
});

globalStyle(`${bigCalendar} .rbc-toolbar button`, {
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  fontSize: vars.font.size.sm,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.white,
  color: vars.colors.black,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  minWidth: '60px',
  height: '36px',
});

globalStyle(`${bigCalendar} .rbc-toolbar button:hover`, {
  backgroundColor: vars.colors.main,
  borderColor: vars.colors.main,
  color: vars.colors.white,
  transform: 'translateY(-1px)',
});

globalStyle(`${bigCalendar} .rbc-toolbar button.rbc-active`, {
  backgroundColor: vars.colors.main,
  borderColor: vars.colors.main,
  color: vars.colors.white,
});

globalStyle(`${bigCalendar} .rbc-toolbar-label`, {
  fontSize: vars.font.size.xl,
  fontVariationSettings: `'wght' ${vars.font.weight.bold}`,
  color: vars.colors.black,
  order: 1,
  flex: 1,
  textAlign: 'left',
  padding: 0,
});

globalStyle(`${bigCalendar} .rbc-month-row`, {
  minHeight: '60px',
});

globalStyle(`${bigCalendar} .rbc-day-bg`, {
  transition: 'background-color 0.2s ease',
});

globalStyle(`${bigCalendar} .rbc-day-bg:hover`, {
  backgroundColor: vars.colors.sub,
});

globalStyle(`${bigCalendar} .rbc-date-cell`, {
  padding: '6px 8px',
  fontSize: vars.font.size.sm,
  fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
});

globalStyle(`${bigCalendar} .rbc-row-content`, {
  minHeight: '50px',
});

// 모바일 반응형
globalStyle(`@media (max-width: 767px)`, {
  [`${bigCalendar} .rbc-toolbar`]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  [`${bigCalendar} .rbc-toolbar-label`]: {
    order: -1,
    textAlign: 'center',
    fontSize: vars.font.size.lg,
    marginBottom: vars.spacing.xs,
    flex: 'none',
  },
  [`${bigCalendar} .rbc-btn-group`]: {
    justifyContent: 'center',
  },
  [`${bigCalendar} .rbc-toolbar button`]: {
    minWidth: '50px',
    height: '32px',
    padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
    fontSize: vars.font.size.xs,
  },
  [`${bigCalendar} .rbc-header`]: {
    padding: `${vars.spacing.xs} 2px`,
    fontSize: vars.font.size.xs,
  },
  [`${bigCalendar} .rbc-date-cell`]: {
    padding: '3px 4px',
    fontSize: vars.font.size.xs,
  },
  [`${bigCalendar} .rbc-event`]: {
    fontSize: '9px',
    padding: '1px 3px',
  },
  [`${bigCalendar} .rbc-month-row`]: {
    minHeight: '50px',
  },
  [`${bigCalendar} .rbc-row-content`]: {
    minHeight: '40px',
  },
});
