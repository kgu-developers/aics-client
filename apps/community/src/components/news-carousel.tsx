'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import { CarouselDots } from '~/components/carousel-dots';
import * as styles from '~/components/news-carousel.css';

const news = [
  {
    id: 1,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글1',
    description:
      '게시글 1입니다. 게시글 1입니다. 게시글 1입니다. 게시글 1입니다. 게시글 1입니다. 게시글 1입니다. 게시글 1입니다. 게시글 1입니다.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글2',
    description:
      '게시글 2입니다. 게시글 2입니다. 게시글 2입니다. 게시글 2입니다. 게시글 2입니다. 게시글 2입니다. 게시글 2입니다. 게시글 2입니다.',
  },
  {
    id: 3,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글3',
    description:
      '게시글 3입니다. 게시글 3입니다. 게시글 3입니다. 게시글 3입니다. 게시글 3입니다. 게시글 3입니다. 게시글 3입니다. 게시글 3입니다.',
  },
  {
    id: 4,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글4',
    description:
      '게시글 4입니다. 게시글 4입니다. 게시글 4입니다. 게시글 4입니다. 게시글 4입니다. 게시글 4입니다. 게시글 4입니다. 게시글 4입니다.',
  },
  {
    id: 5,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글5',
    description:
      '게시글 5입니다. 게시글 5입니다. 게시글 5입니다. 게시글 5입니다. 게시글 5입니다. 게시글 5입니다. 게시글 5입니다. 게시글 5입니다.',
  },
  {
    id: 6,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글6',
    description:
      '게시글 6입니다. 게시글 6입니다. 게시글 6입니다. 게시글 6입니다. 게시글 6입니다. 게시글 6입니다. 게시글 6입니다. 게시글 6입니다.',
  },
  {
    id: 7,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글7',
    description:
      '게시글 7입니다. 게시글 7입니다. 게시글 7입니다. 게시글 7입니다. 게시글 7입니다. 게시글 7입니다. 게시글 7입니다. 게시글 7입니다.',
  },
  {
    id: 8,
    image: 'https://picsum.photos/1600/900',
    alt: '',
    title: '게시글8',
    description:
      '게시글 8입니다. 게시글 8입니다. 게시글 8입니다. 게시글 8입니다. 게시글 8입니다. 게시글 8입니다. 게시글 8입니다. 게시글 8입니다.',
  },
];

function NewsCarousel() {
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
          {news.map((post) => (
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
