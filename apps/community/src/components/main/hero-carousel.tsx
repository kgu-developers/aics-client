'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import { MAIN_QUERY_OPTIONS } from '~/apis/main/queries';
import AltImage from '~/assets/images/alt.png';
import { CarouselDots } from '~/components/carousel-dots';
import * as styles from '~/components/main/hero-carousel.css';

function HeroCarousel() {
  const { data: heroes } = useSuspenseQuery(MAIN_QUERY_OPTIONS.CAROUSEL());

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 9000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

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
  );
}

export { HeroCarousel };
