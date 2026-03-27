import { createElement } from 'react';

import { useToast } from '~/shared/hooks';


import { useGraduationBatchDisapproval } from '~/admin/entities/graduation-approval/model';
import {
  DISAPPROVE_ALERT,
  DISAPPROVE_CANCEL_TEXT,
  DISAPPROVE_CONFIRM_TITLE,
  DISAPPROVE_EMPTY,
  DISAPPROVE_FAILED,
  DISAPPROVE_NOTHING,
  DISAPPROVE_OK_TEXT,
  DISAPPROVE_REASON_FAILED,
  DISAPPROVE_REASON_NOT_APPROVED,
  DISAPPROVE_REASON_NOT_SUBMITTED,
  DISAPPROVE_RESULT_DISAPPROVED,
  DISAPPROVE_RESULT_NONE,
  DISAPPROVE_RESULT_NOT_DISAPPROVED,
  DISAPPROVE_RESULT_TITLE,
  DISAPPROVE_SUCCESS,
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
  label: string;
  reason: string;
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
  const { disapproveGraduationUsers } = useGraduationBatchDisapproval({
    onSuccess,
  });

  const buildResultContent = (
    disapprovedUsers: T[],
    notDisapprovedDetails: NotDisapprovedDetail[],
  ) => {
    const disapprovedLines =
      disapprovedUsers.length > 0
        ? disapprovedUsers.map(user => '- ' + getLabel(user))
        : [DISAPPROVE_RESULT_NONE];

    const notDisapprovedLines =
      notDisapprovedDetails.length > 0
        ? notDisapprovedDetails.map(item => '- ' + item.label + ' (' + item.reason + ')')
        : [DISAPPROVE_RESULT_NONE];

    return [
      DISAPPROVE_RESULT_DISAPPROVED,
      ...disapprovedLines,
      DISAPPROVE_RESULT_NOT_DISAPPROVED,
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
      label: getLabel(user),
      reason: DISAPPROVE_REASON_NOT_SUBMITTED,
    })),
    ...notApproved.map(user => ({
      label: getLabel(user),
      reason: DISAPPROVE_REASON_NOT_APPROVED,
    })),
    ...failed.map(user => ({
      label: getLabel(user),
      reason: DISAPPROVE_REASON_FAILED,
    })),
  ];

  const handleDisapproveSelected = () => {
    if (selectedIds.length === 0) {
      toast.warning(DISAPPROVE_EMPTY);
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
        title: DISAPPROVE_RESULT_TITLE,
        centered: true,
        content: buildResultContent(
          [],
          buildNotDisapprovedDetails(notSubmitted, notApproved),
        ),
      });
      return;
    }

    confirm({
      title: DISAPPROVE_CONFIRM_TITLE,
      content: DISAPPROVE_ALERT,
      okText: DISAPPROVE_OK_TEXT,
      cancelText: DISAPPROVE_CANCEL_TEXT,
      centered: true,
      onOk: async () => {
        try {
          const result = await disapproveGraduationUsers(
            pending.map(item => getId(item)),
          );
          const disapprovedIdSet = new Set(result.disapprovedIds);
          const disapproved = pending.filter(item =>
            disapprovedIdSet.has(getId(item)),
          );
          const failed = pending.filter(
            item => !disapprovedIdSet.has(getId(item)),
          );

          info({
            title: DISAPPROVE_RESULT_TITLE,
            centered: true,
            content: buildResultContent(
              disapproved,
              buildNotDisapprovedDetails(notSubmitted, notApproved, failed),
            ),
          });

          if (disapproved.length > 0) {
            toast.success(DISAPPROVE_SUCCESS);
          } else {
            toast.warning(DISAPPROVE_NOTHING);
          }
        } catch (error) {
          toast.error(
            error instanceof Error ? error.message : DISAPPROVE_FAILED,
          );
        }
      },
    });
  };

  return { handleDisapproveSelected };
}



