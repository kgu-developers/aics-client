import { Link, createFileRoute } from '@tanstack/react-router';
import { Button } from 'antd';
import { useCarouselServiceGetApiV1CarouselsSuspense } from '~/apis/community/queries/suspense';
import { HeroCarousel } from '~/components/hero-carousel';
import { PATH } from '~/constants/path';

export const Route = createFileRoute('/hero-images/')({
  component: HeroImagesPage,
});

function HeroImagesPage() {
  const { data: images } = useCarouselServiceGetApiV1CarouselsSuspense();
  return (
    <section className="flex flex-col gap-4">
      <div className="pb-4">
        <h1 className="text-3xl font-bold">대표 이미지</h1>
        <p className="text-sm text-gray-500">
          홈페이지의 대표 이미지를 관리합니다.
        </p>
      </div>
      <HeroCarousel images={images.contents} />
      <Button className="self-end" type="primary">
        <Link to={PATH.EDIT_HERO_IMAGES}>편집하기</Link>
      </Button>
    </section>
  );
}

export default HeroImagesPage;
