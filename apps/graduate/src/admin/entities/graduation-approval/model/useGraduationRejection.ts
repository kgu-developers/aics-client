import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createElement } from 'react';

import { useToast } from '~/shared/hooks';
import { graduationUsersKeys } from '~/shared/queries';

import { updateGraduationBatchRejection } from '~/admin/entities/graduation-approval/api';
import {
  REJECT_ALERT,
  REJECT_CANCEL_TEXT,
  REJECT_CONFIRM_TITLE,
  REJECT_EMPTY,
  REJECT_FAILED,
  REJECT_NOTHING,
  REJECT_OK_TEXT,
  REJECT_REASON_FAILED,
  REJECT_REASON_NOT_APPROVED,
  REJECT_REASON_NOT_SUBMITTED,
  REJECT_RESULT_NONE,
  REJECT_RESULT_NOT_REJECTED,
  REJECT_RESULT_REJECTED,
  REJECT_RESULT_TITLE,
  REJECT_SUCCESS,
} from '~/admin/shared/ui/Toolbar/toolbarTexts';

type UseRejectGraduationUsersProps<T> = {
  items: T[];
  selectedIds: number[];
  getId: (item: T) => number;
  getLabel: (item: T) => string;
  status: {
    isSubmitted: (item: T) => boolean;
    isApproved: (item: T) => boolean;
  };
  onSuccess?: () => void | Promise<void>;
};

type NotRejectedDetail = {
  id: number;
  label: string;
  reason: string;
};

type RejectParams = {
  ids: number[];
};

export function useGraduationRejection<T>({
  items,
  selectedIds,
  getId,
  getLabel,
  status,
  onSuccess,
}: UseRejectGraduationUsersProps<T>) {
  const { toast, confirm, info } = useToast();
  const queryClient = useQueryClient();
  const rejectMutation = useMutation({
    mutationFn: ({ ids }: RejectParams) => updateGraduationBatchRejection(ids),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: graduationUsersKeys.all,
      });
      await onSuccess?.();
    },
  });

  const buildResultContent = (
    rejectedUsers: T[],
    notRejectedDetails: NotRejectedDetail[],
  ) => {
    const rejectedLines =
      rejectedUsers.length > 0
        ? rejectedUsers.map(user => `- ${getLabel(user)}`)
        : [REJECT_RESULT_NONE];

    const notRejectedLines =
      notRejectedDetails.length > 0
        ? notRejectedDetails.map(item => `- ${item.label} (${item.reason})`)
        : [REJECT_RESULT_NONE];

    return [
      REJECT_RESULT_REJECTED,
      ...rejectedLines,
      REJECT_RESULT_NOT_REJECTED,
      ...notRejectedLines,
    ]
      .filter(Boolean)
      .map((line, index) => createElement('div', { key: index }, line));
  };

  const buildNotRejectedDetails = (
    notSubmitted: T[],
    notApproved: T[],
    failed: T[] = [],
  ) => [
    ...notSubmitted.map(user => ({
      id: getId(user),
      label: getLabel(user),
      reason: REJECT_REASON_NOT_SUBMITTED,
    })),
    ...notApproved.map(user => ({
      id: getId(user),
      label: getLabel(user),
      reason: REJECT_REASON_NOT_APPROVED,
    })),
    ...failed.map(user => ({
      id: getId(user),
      label: getLabel(user),
      reason: REJECT_REASON_FAILED,
    })),
  ];

  const handleRejectSelected = () => {
    if (selectedIds.length === 0) {
      toast.warning(REJECT_EMPTY);
      return;
    }

    const selected = items.filter(item => selectedIds.includes(getId(item)));
    const notSubmitted: T[] = [];
    const notApproved: T[] = [];
    const pending: T[] = [];

    selected.forEach(item => {
      const submitted = status.isSubmitted(item);
      const approved = status.isApproved(item);

      if (!submitted) {
        notSubmitted.push(item);
        return;
      }

      if (!approved) {
        notApproved.push(item);
        return;
      }

      pending.push(item);
    });

    if (pending.length === 0) {
      info({
        title: REJECT_RESULT_TITLE,
        centered: true,
        content: buildResultContent(
          [],
          buildNotRejectedDetails(notSubmitted, notApproved),
        ),
      });
      return;
    }

    confirm({
      title: REJECT_CONFIRM_TITLE,
      content: REJECT_ALERT,
      okText: REJECT_OK_TEXT,
      cancelText: REJECT_CANCEL_TEXT,
      centered: true,
      onOk: async () => {
        try {
          const result = await rejectMutation.mutateAsync({
            ids: pending.map(item => getId(item)),
          });
          const rejectedIdSet = new Set(result.rejectedIds);
          const rejected = pending.filter(item =>
            rejectedIdSet.has(getId(item)),
          );
          const failed = pending.filter(
            item => !rejectedIdSet.has(getId(item)),
          );

          info({
            title: REJECT_RESULT_TITLE,
            centered: true,
            content: buildResultContent(
              rejected,
              buildNotRejectedDetails(notSubmitted, notApproved, failed),
            ),
          });

          if (rejected.length > 0) {
            toast.success(REJECT_SUCCESS);
          } else {
            toast.warning(REJECT_NOTHING);
          }
        } catch (error) {
          toast.error(error instanceof Error ? error.message : REJECT_FAILED);
        }
      },
    });
  };

  return { handleRejectSelected };
}
