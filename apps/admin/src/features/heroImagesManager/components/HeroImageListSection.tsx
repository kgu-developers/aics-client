import { HeroImageEditCard } from './HeroImageEditCard';
import { MESSAGES } from '../constant/constants';

import type { CarouselResponse } from '~/apis/community/requests';

interface HeroImageListSectionProps {
  heroContents: CarouselResponse[];
}

export const HeroImageListSection = ({
  heroContents,
}: HeroImageListSectionProps) => {
  return (
    <>
      <h2 className='pt-4 text-2xl font-bold border-t border-gray-200'>
        {MESSAGES.title.imageList}
      </h2>
      <div className='grid grid-cols-4 gap-4'>
        {heroContents.map(image => (
          <HeroImageEditCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};
