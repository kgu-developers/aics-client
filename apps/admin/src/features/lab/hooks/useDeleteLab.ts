import type { MessageInstance } from 'antd/es/message/interface';

import { queryClient } from '~/shared/utils/';

import { MESSAGES } from '../constant/constants';

import { useLabServiceDeleteApiV1LabsById } from '~/apis/admin/queries';
import { useLabServiceGetApiV1LabsKey } from '~/apis/community/queries';


interface useDeleteLabProps {
  open: MessageInstance['open'];
}

export const useDeleteLab = ({ open }: useDeleteLabProps) => {
  const mutation = useLabServiceDeleteApiV1LabsById({
    onSuccess: () => {
      open({
        type: 'success',
        content: MESSAGES.success.deleteLab,
      });
      queryClient.invalidateQueries({
        queryKey: [useLabServiceGetApiV1LabsKey],
      });
    },
    onError: () => {
      open({
        type: 'error',
        content: MESSAGES.error.deleteLab,
      });
    },
  });
  return { deleteLab: mutation.mutate };
};
