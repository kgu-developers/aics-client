import { message } from 'antd';

import { queryClient } from '~/shared/utils/';

import {
  DIRECTIONS_CATEGORY,
  DIRECTIONS_MESSAGES,
} from '~/features/directions/constants/directions';
import { UseAboutServiceGetApiV1AboutsKeyFn } from '~/features/directions/services';
import {
  useAboutServicePatchApiV1Abouts,
  useAboutServicePostApiV1Abouts,
} from '~/features/directions/services';
import type {
  DirectionsContent,
  DirectionsCreateBody,
  DirectionsUpdateBody,
} from '~/features/directions/types';

type SaveArgs = {
  currentContent: DirectionsContent;
  nextContent: DirectionsCreateBody['content'] &
    DirectionsUpdateBody['content'];
};

type Options = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useUpsertDirections(options?: Options) {
  const [msgApi, contextHolder] = message.useMessage();

  const { mutate: postDirections } = useAboutServicePostApiV1Abouts();
  const { mutate: patchDirections } = useAboutServicePatchApiV1Abouts();

  const invalidate = () =>
    queryClient.invalidateQueries({
      queryKey: UseAboutServiceGetApiV1AboutsKeyFn({
        category: DIRECTIONS_CATEGORY,
      }),
    });

  const save = ({ currentContent, nextContent }: SaveArgs): Promise<void> =>
    new Promise((resolve, reject) => {
      const createBody: DirectionsCreateBody = {
        category: DIRECTIONS_CATEGORY,
        content: nextContent,
      };
      const updateBody: DirectionsUpdateBody = {
        content: nextContent,
      };

      const onSuccess = async () => {
        await invalidate();
        await msgApi.open({
          type: 'success',
          content: DIRECTIONS_MESSAGES.success,
          duration: 0.7,
        });
        options?.onSuccess?.();
        resolve();
      };

      const onError = async () => {
        await msgApi.open({
          type: 'error',
          content: DIRECTIONS_MESSAGES.error,
        });
        options?.onError?.();
        reject(new Error('directions upsert failed'));
      };

      if (currentContent === null) {
        postDirections({ requestBody: createBody }, { onSuccess, onError });
      } else {
        patchDirections(
          { category: DIRECTIONS_CATEGORY, requestBody: updateBody },
          { onSuccess, onError },
        );
      }
    });

  return { save, contextHolder };
}
