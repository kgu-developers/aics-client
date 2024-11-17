'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import { CarouselDots } from '~/components/carousel-dots';
import * as styles from '~/components/hero-carousel.css';

const slides = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  image: 'https://picsum.photos/900/1600',
  alt: 'picsum',
}));

function HeroCarousel() {
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
          {slides.map((slide) => (
            <div key={`hero-${slide.id}`} className={styles.slide}>
              <Image
                src={slide.image}
                alt={slide.alt}
                width={1600}
                height={900}
                className={styles.image}
              />
            </div>
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
