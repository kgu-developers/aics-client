import localFont from 'next/font/local';

const pretendardVariable = localFont({
  src: './pretendard-variable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '45 920',
  adjustFontFallback: false,
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export { pretendardVariable };
