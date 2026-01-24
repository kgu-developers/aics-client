const ROUTE = {
  HOME: '/',
  NOTICE: '/notice',
  THESIS: '/thesis',
  THESIS_MIDREPORT: '/thesis?type=midreport',
  THESIS_FINALREPORT: '/thesis?type=finalreport',
  CERTIFICATION: '/certification',
  APPLY: '/apply',
  STATUS: '/status',
  SCHEDULE: '/schedule',
  ALL: '/all',
  LOGIN: '/login',
  FILE_PREVIEW: '/file-preview',
  APPLY_CONFIRM: '/apply-confirm',
} as const;

export default ROUTE;
