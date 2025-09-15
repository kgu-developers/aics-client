import { Carousel } from 'antd'

import type { CarouselResponse } from '~/apis/community/requests'
import AltImage from '~/assets/images/alt.png'

interface HeroCarouselProps {
  images: CarouselResponse[]
  autoplay?: boolean
}

function HeroCarousel({ images, autoplay = true }: HeroCarouselProps) {
  return (
    <Carousel
      autoplay={autoplay}
      className="custom-carousel border border-gray-200 aspect-[16/9] rounded-lg"
    >
      {images.map((image) => (
        <div key={image.id} className="rounded-lg">
          <img
            src={image.file?.physicalPath ?? AltImage}
            alt={image.text ?? '사진'}
            className="object-cover"
          />
        </div>
      ))}
    </Carousel>
  )
}

export { HeroCarousel }
