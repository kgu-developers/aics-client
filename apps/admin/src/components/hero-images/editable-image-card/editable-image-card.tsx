import type { CarouselResponse } from '~/apis/community/requests';
import AltImage from '~/assets/images/alt.png';
import {
  DeleteHeroImageButton,
  EditHeroImageButton,
} from '../editable-image-card/hero-image-manager';

interface EditableImageCardProps {
  image: CarouselResponse;
}

function EditableImageCard({ image }: EditableImageCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={image.file?.physicalPath ?? AltImage}
        alt={image.text ?? '사진'}
        className="object-cover border border-gray-200 rounded-md aspect-16/9"
      />
      <div className="flex items-center self-center gap-1">
        <EditHeroImageButton image={image} />
        <DeleteHeroImageButton id={image.id} />
      </div>
    </div>
  );
}

export { EditableImageCard };
