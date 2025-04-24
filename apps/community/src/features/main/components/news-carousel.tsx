'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useSuspenseQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import * as styles from '~/features/main/components/news-carousel.css'
import { MAIN_QUERY_OPTIONS } from '~/features/main/services/queries'
import type { Post } from '~/features/main/services/remote'
import AltImage from '~/shared/assets/images/alt.png'
import { CarouselDots } from '~/shared/components/carousel/carousel-dots'
import { PATH } from '~/shared/constants/path'

function NewsCarousel() {
  const { data: recentNews } = useSuspenseQuery(MAIN_QUERY_OPTIONS.NEWS())

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 'auto' },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  )

  return (
    <section className={styles.news}>
      <div className={styles.newsHeader}>
        <div className={styles.title}>
          <Link href={PATH.NEWS}>학부 소식</Link>
        </div>
        <div className={styles.controls}>
          <CarouselDots emblaApi={emblaApi} />
        </div>
      </div>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.slides}>
          {recentNews.map((post) => (
            <NewsCard key={`news-${post.postId}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsCard({ post }: { post: Post }) {
  return (
    <Link
      key={`news-${post.postId}`}
      href={PATH.NEWS_DETAIL(post.postId)}
      className={styles.link}
    >
      <div className={styles.slide}>
        <div className={styles.image}>
          <Image src={AltImage} alt="preview-image" fill />
        </div>
        <h3 className={styles.slideTitle}>{post.title}</h3>
        <div
          className={styles.slideDescription}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}
        />
      </div>
    </Link>
  )
}

export default NewsCarousel
