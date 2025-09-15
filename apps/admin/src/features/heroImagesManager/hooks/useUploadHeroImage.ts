import { useFileServicePostApiV1FilesCarousel } from '~/apis/admin/queries'

export const useUploadHeroImage = () => {
  const mutation = useFileServicePostApiV1FilesCarousel()

  return { uploadHeroImage: mutation.mutateAsync }
}
