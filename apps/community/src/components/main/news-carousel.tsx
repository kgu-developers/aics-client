'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import { MAIN_QUERY_OPTIONS } from '~/apis/main/queries';
import AltImage from '~/assets/images/alt.png';
import { CarouselDots } from '~/components/carousel-dots';
import * as styles from '~/components/main/news-carousel.css';

function NewsCarousel() {
  const { data: recentNews } = useSuspenseQuery(MAIN_QUERY_OPTIONS.NEWS());

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
            <Link
              key={`news-${post.postId}`}
              href={`/board/news/${post.postId}`}
              className={styles.link}
            >
              <div className={styles.slide}>
                <div className={styles.image}>
                  <Image src={AltImage} alt="preview-image" fill />
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
