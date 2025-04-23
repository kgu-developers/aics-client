'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useSuspenseQuery } from '@tanstack/react-query'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import AltImage from '~/shared/assets/images/alt.png'
import * as styles from '~/features/main/components/hero-carousel.css'
import { MAIN_QUERY_OPTIONS } from '~/features/main/services/queries'
import { CarouselDots } from '~/shared/components/carousel/carousel-dots'

function HeroCarousel() {
  const { data: heroes } = useSuspenseQuery(MAIN_QUERY_OPTIONS.CAROUSEL())

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 9000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ])

  return (
    <section className={styles.hero}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.slides}>
          {heroes.map((slide) => (
            <Link
              key={`hero-${slide.id}`}
              href={slide.link}
              className={styles.slide}
            >
              <Image
                src={slide.file.physicalPath ?? AltImage}
                alt={`slide-${slide.file.id}`}
                width={1600}
                height={900}
                className={styles.image}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <CarouselDots emblaApi={emblaApi} />
      </div>
    </section>
  )
}

export { HeroCarousel }
