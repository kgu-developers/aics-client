'use client';

import dynamic from 'next/dynamic';

// 클라이언트 전용 dynamic import
const NewsCarousel = dynamic(() => import('./news-carousel'), {
  ssr: false,
});

export default NewsCarousel;
