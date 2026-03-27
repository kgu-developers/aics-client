import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createElement } from 'react';

import { useToast } from '~/shared/hooks';
import { graduationUsersKeys, studentKeys } from '~/shared/queries';

import { updateGraduationBatchDisapproval } from '~/admin/entities/graduation-approval/api';
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

type UseDisapproveGraduationUsersProps<T> = {
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

type NotDisapprovedDetail = {
  id: number;
  label: string;
  reason: string;
};

type DisapproveParams = {
  ids: number[];
};

export function useGraduationDisapproval<T>({
  items,
  selectedIds,
  getId,
  getLabel,
  status,
  onSuccess,
}: UseDisapproveGraduationUsersProps<T>) {
  const { toast, confirm, info } = useToast();
  const queryClient = useQueryClient();
  const disapproveMutation = useMutation({
    mutationFn: ({ ids }: DisapproveParams) =>
      updateGraduationBatchDisapproval(ids),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: graduationUsersKeys.all,
      });
      await queryClient.invalidateQueries({
        queryKey: studentKeys.details(),
      });
      await onSuccess?.();
    },
  });

  const buildResultContent = (
    disapprovedUsers: T[],
    notDisapprovedDetails: NotDisapprovedDetail[],
  ) => {
    const disapprovedLines =
      disapprovedUsers.length > 0
        ? disapprovedUsers.map(user => `- ${getLabel(user)}`)
        : [REJECT_RESULT_NONE];

    const notDisapprovedLines =
      notDisapprovedDetails.length > 0
        ? notDisapprovedDetails.map(item => `- ${item.label} (${item.reason})`)
        : [REJECT_RESULT_NONE];

    return [
      REJECT_RESULT_REJECTED,
      ...disapprovedLines,
      REJECT_RESULT_NOT_REJECTED,
      ...notDisapprovedLines,
    ]
      .filter(Boolean)
      .map((line, index) => createElement('div', { key: index }, line));
  };

  const buildNotDisapprovedDetails = (
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

  const handleDisapproveSelected = () => {
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
          buildNotDisapprovedDetails(notSubmitted, notApproved),
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
          const result = await disapproveMutation.mutateAsync({
            ids: pending.map(item => getId(item)),
          });
          const disapprovedIdSet = new Set(result.disapprovedIds);
          const disapproved = pending.filter(item =>
            disapprovedIdSet.has(getId(item)),
          );
          const failed = pending.filter(
            item => !disapprovedIdSet.has(getId(item)),
          );

          info({
            title: REJECT_RESULT_TITLE,
            centered: true,
            content: buildResultContent(
              disapproved,
              buildNotDisapprovedDetails(notSubmitted, notApproved, failed),
            ),
          });

          if (disapproved.length > 0) {
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

  return { handleDisapproveSelected };
}
