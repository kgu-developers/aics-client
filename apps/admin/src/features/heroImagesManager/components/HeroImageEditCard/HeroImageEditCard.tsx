import { DeleteHeroImageButton } from './DeleteHeroImageButton';
import { EditHeroImageButton } from './EditHeroImageButton';
import { LABELS } from '../../constant/constants';

import type { CarouselResponse } from '~/apis/community/requests';
import AltImage from '~/assets/images/alt.png';

interface EditableImageCardProps {
  image: CarouselResponse;
}

export const HeroImageEditCard = ({ image }: EditableImageCardProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <img
        src={image.file?.physicalPath ?? AltImage}
        alt={image.text ?? LABELS.image}
        className='object-cover border border-gray-200 rounded-md aspect-16/9'
      />
      <div className='flex items-center self-center gap-1'>
        <EditHeroImageButton image={image} />
        <DeleteHeroImageButton id={image.id} />
      </div>
    </div>
  );
};
