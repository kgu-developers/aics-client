import * as styles from '~/app/page.css';
import { getHeroImages, getRecentNews, getRecentNotices } from '~/app/remotes';
import { HeroCarousel } from '~/components/main/hero-carousel';
import { NewsCarousel } from '~/components/main/news-carousel';
import { NoticeList } from '~/components/main/notice-list';

//** TODO: for mocking */
export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data: heroes } = await getHeroImages();
  const { data: recentNews } = await getRecentNews();
  const { data: recentNotices } = await getRecentNotices();

  return (
    <div className={styles.wrapper}>
      <section>
        <HeroCarousel heroes={heroes} />
      </section>
      <section className={styles.section2}>
        <NewsCarousel recentNews={recentNews} />
        <NoticeList recentNotices={recentNotices} />
      </section>
    </div>
  );
}
