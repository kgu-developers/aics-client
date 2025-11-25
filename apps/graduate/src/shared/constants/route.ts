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
  RULES: '/rules',
  LOGIN: '/login',
} as const;

export default ROUTE;
