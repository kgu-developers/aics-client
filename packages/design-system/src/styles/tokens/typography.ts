const typography = {
  fontFamily: {
    sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  lineHeight: {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
  },
  fontWeight: {
    /** 400 */
    regular: '400',
    /** 500 */
    medium: '500',
    /** 600 */
    semibold: '600',
    /** 700 */
    bold: '700',
  },
  // -- preset
  textSize: {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    md: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    lg: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
    xl: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    '2xl': {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    '3xl': {
      fontSize: '1.875rem' /* 30px */,
      lineHeight: '2.25rem' /* 36px */,
    },
  },
} as const

export default typography
