import { HeroCarousel } from '~/shared/components/HeroCarousel';

import { HeroImageCreator } from './HeroImageCreator';
import { MESSAGES } from '../constant/constants';

import type { CarouselResponse } from '~/apis/community/requests';

interface HeroImageCreateSectionProps {
  heroContents: CarouselResponse[];
}

export const HeroImageCreateSection = ({
  heroContents,
}: HeroImageCreateSectionProps) => {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>{MESSAGES.title.updateImage}</h1>
        <p className='text-sm text-gray-500'>
          {MESSAGES.paragraph.updateImage}
        </p>
      </div>
      <HeroCarousel autoplay={false} images={heroContents} />
      <HeroImageCreator />
    </>
  );
};
