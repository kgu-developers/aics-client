import * as styles from '~/app/page.css'
import HeroCarousel from '~/features/main/components/heor-carousel.clent'
import NewsCarousel from '~/features/main/components/news-carousel.client'
import NoticeList from '~/features/main/components/notice-list.client'

export default async function Home() {
  return (
    <div className={styles.wrapper}>
      <HeroCarousel />
      <section className={styles.newsSection}>
        <NewsCarousel />
        <NoticeList />
      </section>
    </div>
  )
}
