import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme('#app', {
  colors: {
    white: '#FFFFFF',
    black: '#0B0B0B',

    main: '#006AE4',
    mainDark: '#0054B3', // hover / 강조용
    mainLight: '#3388ED', // 밝은 톤
    mainLightHover: '#B4D7FF', // 밝은 톤 hover
    mainXLight: '#E6F0FF', // 밝은 톤 배경
    mainBorder: '#B5D3FF',

    sub: '#F3F4F6',
    subHover: '#E5E7EB',
    subDark: '#A0A4B0', // 비활성 텍스트
    subText: '#4B4E57', // 일반 텍스트용 진회색
    border: '#CECECE', // 구분선용
    label: '#404040',

    error: '#E64848',
    success: '#22C55E',
    warning: '#FACC15',
  },
  font: {
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '44px',
      '8xl': '48px',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    ml: '20px',
    lg: '24px',
    xl: '32px',
    bottom: '10px',
    authLogo: '48px',
  },
})
