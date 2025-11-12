import type { MessageInstance } from 'antd/es/message/interface';

import { MESSAGES } from '../constant/constants';

import { useFileServicePostApiV1FilesLab } from '~/apis/admin/queries';


interface UseUploadLabImageProps {
  open: MessageInstance['open'];
}

export const useUploadLabImage = ({ open }: UseUploadLabImageProps) => {
  const mutation = useFileServicePostApiV1FilesLab({
    onError: () => {
      open({
        type: 'error',
        content: MESSAGES.error.uploadImage,
      });
    },
  });

  return {
    uploadLabImage: mutation.mutateAsync,
  };
};
