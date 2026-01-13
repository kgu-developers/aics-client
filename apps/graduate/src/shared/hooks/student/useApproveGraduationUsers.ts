import { createElement } from 'react';

import {
  APPROVE_ALERT,
  APPROVE_CONFIRM_TITLE,
  APPROVE_OK_TEXT,
  APPROVE_CANCEL_TEXT,
  APPROVE_EMPTY,
  APPROVE_FAILED,
  APPROVE_NOTHING,
  APPROVE_REASON_ALREADY_APPROVED,
  APPROVE_REASON_FAILED,
  APPROVE_REASON_NOT_SUBMITTED,
  APPROVE_RESULT_APPROVED,
  APPROVE_RESULT_NONE,
  APPROVE_RESULT_NOT_APPROVED,
  APPROVE_RESULT_TITLE,
  APPROVE_SUCCESS,
} from '~/shared/components/Toolbar/toolbarTexts';

import { useToast } from '../useToast';
import { useUpdateGraduationUsersBatchApprove } from './useUpdateGraduationUsersBatchApprove';

type ApprovalBuckets<T> = {
  notSubmitted: T[];
  pending: T[];
  alreadyApproved: T[];
};

type Options<T> = {
  items: T[];
  selectedIds: number[];
  getId: (item: T) => number;
  getLabel: (item: T) => string;
  classify: (selected: T[]) => ApprovalBuckets<T>;
  onSuccess?: () => void | Promise<void>;
};

type NotApprovedDetail = {
  id: number;
  label: string;
  reason: string;
};

export function useApproveGraduationUsers<T>({
  items,
  selectedIds,
  getId,
  getLabel,
  classify,
  onSuccess,
}: Options<T>) {
  const { toast, confirm, info } = useToast();
  const { approveGraduationUsers } = useUpdateGraduationUsersBatchApprove({
    onSuccess,
  });

  const buildResultContent = (
    approvedUsers: T[],
    notApprovedDetails: NotApprovedDetail[],
  ) => {
    const approvedLines =
      approvedUsers.length > 0
        ? approvedUsers.map(user => `- ${getLabel(user)}`)
        : [APPROVE_RESULT_NONE];
    const notApprovedLines =
      notApprovedDetails.length > 0
        ? notApprovedDetails.map(
            item => `- ${item.label} (${item.reason})`,
          )
        : [APPROVE_RESULT_NONE];

    return [
      APPROVE_RESULT_APPROVED,
      ...approvedLines,
      APPROVE_RESULT_NOT_APPROVED,
      ...notApprovedLines,
    ]
      .filter(Boolean)
      .map((line, index) => createElement('div', { key: index }, line));
  };

  const buildNotApprovedDetails = (
    notSubmitted: T[],
    alreadyApproved: T[],
    failed: T[] = [],
  ) => [
    ...notSubmitted.map(user => ({
      id: getId(user),
      label: getLabel(user),
      reason: APPROVE_REASON_NOT_SUBMITTED,
    })),
    ...alreadyApproved.map(user => ({
      id: getId(user),
      label: getLabel(user),
      reason: APPROVE_REASON_ALREADY_APPROVED,
    })),
    ...failed.map(user => ({
      id: getId(user),
      label: getLabel(user),
      reason: APPROVE_REASON_FAILED,
    })),
  ];

  const handleApproveSelected = () => {
    if (selectedIds.length === 0) {
      toast.warning(APPROVE_EMPTY);
      return;
    }

    const selected = items.filter(item => selectedIds.includes(getId(item)));
    const { notSubmitted, pending, alreadyApproved } = classify(selected);

    if (pending.length === 0) {
      info({
        title: APPROVE_RESULT_TITLE,
        content: buildResultContent(
          [],
          buildNotApprovedDetails(notSubmitted, alreadyApproved),
        ),
      });
      return;
    }

    confirm({
      title: APPROVE_CONFIRM_TITLE,
      content: APPROVE_ALERT,
      okText: APPROVE_OK_TEXT,
      cancelText: APPROVE_CANCEL_TEXT,
      onOk: async () => {
        try {
          const result = await approveGraduationUsers(
            pending.map(item => getId(item)),
          );
          const approvedIdSet = new Set(result.approvedIds);
          const approved = pending.filter(item =>
            approvedIdSet.has(getId(item)),
          );
          const failed = pending.filter(
            item => !approvedIdSet.has(getId(item)),
          );

          info({
            title: APPROVE_RESULT_TITLE,
            content: buildResultContent(
              approved,
              buildNotApprovedDetails(notSubmitted, alreadyApproved, failed),
            ),
          });

          if (approved.length > 0) {
            toast.success(APPROVE_SUCCESS);
          } else {
            toast.warning(APPROVE_NOTHING);
          }
        } catch (error) {
          toast.error(error instanceof Error ? error.message : APPROVE_FAILED);
        }
      },
    });
  };

  return { handleApproveSelected };
}
