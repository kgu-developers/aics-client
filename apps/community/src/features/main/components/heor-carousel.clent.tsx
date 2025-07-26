'use client'

import dynamic from 'next/dynamic'

const HeroCarousel = dynamic(() => import('./hero-carousel'), {
  ssr: false,
})

export default HeroCarousel