import { useFileServicePostApiV1FilesClub } from '~/features/club/services'
export function useClubImageUpload() {
  const upload = useFileServicePostApiV1FilesClub()
  const uploadAndGetFileId = async (file: File) => {
    const res = await upload.mutateAsync({ formData: { file } })
    return res?.id as number | undefined
  }
  return { uploadAndGetFileId, isPending: upload.isPending }
}
