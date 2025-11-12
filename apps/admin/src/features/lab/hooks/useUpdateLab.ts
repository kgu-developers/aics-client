import type { MessageInstance } from 'antd/es/message/interface';

import { queryClient } from '~/shared/utils/';

import { MESSAGES } from '../constant/constants';

import { useLabServicePatchApiV1LabsById } from '~/apis/admin/queries';
import { useLabServiceGetApiV1LabsKey } from '~/apis/community/queries';


interface useUpdateLabProps {
  register: any;
  open: MessageInstance['open'];
}

export const useUpdateLab = ({ register, open }: useUpdateLabProps) => {
  const mutation = useLabServicePatchApiV1LabsById({
    onSuccess: () => {
      register.cancel();
      open({
        type: 'success',
        content: MESSAGES.success.updateLab,
      });
      queryClient.invalidateQueries({
        queryKey: [useLabServiceGetApiV1LabsKey],
      });
    },
    onError: () => {
      open({
        type: 'error',
        content: MESSAGES.error.updateLab,
      });
    },
  });

  return { updateLab: mutation.mutate };
};
