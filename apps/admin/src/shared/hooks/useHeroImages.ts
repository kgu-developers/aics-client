import { useCarouselServiceGetApiV1CarouselsSuspense } from '~/apis/community/queries/suspense'

export const useHeroImages = () => {
  const { data } = useCarouselServiceGetApiV1CarouselsSuspense()

  return {
    data: data,
  }
}
