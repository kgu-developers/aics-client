import * as styles from '~/app/page.css';
import { HeroCarousel } from '~/components/hero-carousel';
import { NewsCarousel } from '~/components/news-carousel';
import { NoticeList } from '~/components/notice-list';

export default function Home() {
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
