const screen = {
  /** 640px */
  sm: (css: React.CSSProperties) => {
    return {
      '@media': {
        '(min-width: 640px)': css,
      },
    };
  },
  /** 768px */
  md: (css: React.CSSProperties) => {
    return {
      '@media': {
        '(min-width: 768px)': css,
      },
    };
  },
  /** 1024px */
  lg: (css: React.CSSProperties) => {
    return {
      '@media': {
        '(min-width: 1024px)': css,
      },
    };
  },
  /** 1280px */
  xl: (css: React.CSSProperties) => {
    return {
      '@media': {
        '(min-width: 1280px)': css,
      },
    };
  },
} as const;

export default screen;
