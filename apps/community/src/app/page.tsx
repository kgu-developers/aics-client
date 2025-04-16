import * as styles from '~/app/page.css';
import { HeroCarousel } from '~/components/main/hero-carousel';
import NewsCarousel from '~/components/main/news-carousel.client';
import NoticeList from '~/components/main/notice-list.client';

export default async function Home() {
  return (
    <div className={styles.wrapper}>
      <section>
        <HeroCarousel />
      </section>
      <section className={styles.section2}>
        <NewsCarousel />
        <NoticeList />
      </section>
    </div>
  );
}
