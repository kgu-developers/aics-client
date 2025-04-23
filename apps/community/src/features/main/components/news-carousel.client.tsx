'use client'

import dynamic from 'next/dynamic'

const NewsCarousel = dynamic(() => import('./news-carousel'), {
  ssr: false,
})

export default NewsCarousel
