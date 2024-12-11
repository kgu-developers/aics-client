'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import { CarouselDots } from '~/components/carousel-dots';
import * as styles from '~/components/main/news-carousel.css';

function NewsCarousel({ recentNews }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 'auto' },
    [Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  return (
    <section className={styles.news}>
      <div className={styles.newsHeader}>
        <div className={styles.title}>
          <Link href="/">학부 소식</Link>
        </div>
        <div className={styles.controls}>
          <CarouselDots emblaApi={emblaApi} />
        </div>
      </div>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.slides}>
          {recentNews.map((post) => (
            <Link key={`news-${post.id}`} href="/" className={styles.link}>
              <div className={styles.slide}>
                <div className={styles.image}>
                  <Image src={post.image} alt={post.alt} fill />
                </div>
                <h3 className={styles.slideTitle}>{post.title}</h3>
                <p className={styles.slideDescription}>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { NewsCarousel };
