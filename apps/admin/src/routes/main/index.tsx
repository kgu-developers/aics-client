import { Suspense } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Spin } from 'antd';

import {
  useCarouselServiceGetApiV1CarouselsSuspense,
  usePostServiceGetApiV1PostsSuspense,
} from '~/apis/community/queries/suspense';

import { HeroCarousel } from '~/components/hero-images/hero-carousel';
import { PostListCard } from '~/components/main/posts-list-card';
import { PATH } from '~/constants/path';

export const Route = createFileRoute('/main/')({
  component: MainPage,
});

function MainPage() {
  const { data: carouselImages } =
    useCarouselServiceGetApiV1CarouselsSuspense();
  const { data: noticeList } = usePostServiceGetApiV1PostsSuspense({
    category: 'NOTIFICATION',
    page: 0,
    size: 5,
  });
  const { data: newsList } = usePostServiceGetApiV1PostsSuspense({
    category: 'NEWS',
    page: 0,
    size: 5,
  });
  return (
    <Suspense fallback={<Spin />}>
      <section className="flex flex-col gap-4">
        <HeroCarousel images={carouselImages.contents} />
        <div className="flex gap-4">
          <PostListCard
            title="공지사항"
            to={PATH.NOTICE}
            posts={noticeList.contents}
          />
          <PostListCard
            title="학부소식"
            to={PATH.NEWS}
            posts={newsList.contents}
          />
        </div>
      </section>
    </Suspense>
  );
}
