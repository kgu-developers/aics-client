import { createFileRoute } from '@tanstack/react-router';

import { useHeroImages } from '~/shared/hooks/useHeroImages';

import { HeroImageCreateSection } from '~/features/heroImagesManager/components/HeroImageCreateSection';
import { HeroImageListSection } from '~/features/heroImagesManager/components/HeroImageListSection';


export const Route = createFileRoute('/heroImagesManager/')({
  component: EditHeroImagesPage,
});

function EditHeroImagesPage() {
  const {
    data: { contents: heroContents },
  } = useHeroImages();

  return (
    <section className='flex flex-col gap-4'>
      <HeroImageCreateSection heroContents={heroContents} />
      <HeroImageListSection heroContents={heroContents} />
    </section>
  );
}

export default EditHeroImagesPage;
