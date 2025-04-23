import { createFileRoute } from '@tanstack/react-router'

import { useCarouselServiceGetApiV1CarouselsSuspense } from '~/apis/community/queries/suspense'
import { EditableImageCard } from '~/components/hero-images/editable-image-card/editable-image-card'
import { HeroCarousel } from '~/components/hero-images/hero-carousel'
import { HeroImageCreator } from '~/components/hero-images/hero-image-creator'

export const Route = createFileRoute('/hero-images/edit/')({
  component: EditHeroImagesPage,
})

function EditHeroImagesPage() {
  const { data: images } = useCarouselServiceGetApiV1CarouselsSuspense()

  return (
    <section className="flex flex-col gap-4">
      {/* TODO: page-header 컴포넌트 제작 예정 */}
      <div>
        <h1 className="text-3xl font-bold">대표 이미지 수정</h1>
        <p className="text-sm text-gray-500">
          홈페이지의 대표 이미지를 관리합니다.
        </p>
      </div>
      <HeroCarousel autoplay={false} images={images.contents} />
      <HeroImageCreator />
      <h2 className="pt-4 text-2xl font-bold border-t border-gray-200">
        이미지 목록
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {images.contents.map((image) => (
          <EditableImageCard key={image.id} image={image} />
        ))}
      </div>
    </section>
  )
}

export default EditHeroImagesPage
