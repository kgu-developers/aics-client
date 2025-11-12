import { MESSAGES, MESSAGE_DURATION } from '../constants/post.constants';

import { useFileServicePostApiV1FilesPost } from '~/apis/admin/queries';


interface UseFileUploadProps {
  messageApi: {
    open: (config: {
      type: 'success' | 'error';
      content: string;
      duration?: number;
    }) => void;
  };
}

export function useFileUpload({ messageApi }: UseFileUploadProps) {
  const mutation = useFileServicePostApiV1FilesPost({
    onSuccess(data) {
      messageApi.open({
        type: 'success',
        content: MESSAGES.success.uploadFile,
        duration: MESSAGE_DURATION,
      });
      return data.id;
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: MESSAGES.error.uploadFile,
      });
    },
  });

  return { uploadFile: mutation.mutateAsync };
}
