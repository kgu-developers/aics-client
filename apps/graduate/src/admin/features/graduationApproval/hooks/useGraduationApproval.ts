import { createElement } from 'react';

import { useToast } from '~/shared/hooks';

import { useGraduationBatchApproval } from '~/admin/entities/graduation-approval/model';
import {
  APPROVE_ALERT,
  APPROVE_CANCEL_TEXT,
  APPROVE_CONFIRM_TITLE,
  APPROVE_EMPTY,
  APPROVE_FAILED,
  APPROVE_NOTHING,
  APPROVE_OK_TEXT,
  APPROVE_REASON_ALREADY_APPROVED,
  APPROVE_REASON_FAILED,
  APPROVE_REASON_NOT_SUBMITTED,
  APPROVE_RESULT_APPROVED,
  APPROVE_RESULT_NONE,
  APPROVE_RESULT_NOT_APPROVED,
  APPROVE_RESULT_TITLE,
  APPROVE_SUCCESS,
} from '~/admin/shared/constants/actionTexts';

type UseApproveGraduationUsersProps<T> = {
  items: T[];
  selectedIds: number[];
  getId: (item: T) => number;
  getLabel: (item: T) => string;
  getSubmissionId: (item: T) => number | null;
  status: {
    isSubmitted: (item: T) => boolean;
    isApproved: (item: T) => boolean;
  };
  onSuccess?: () => void | Promise<void>;
};

type NotApprovedDetail = {
  label: string;
  reason: string;
};

export function useGraduationApproval<T>({
  items,
  selectedIds,
  getId,
  getLabel,
  getSubmissionId,
  status,
  onSuccess,
}: UseApproveGraduationUsersProps<T>) {
  const { toast, confirm, info } = useToast();
  const { approveGraduationUsers } = useGraduationBatchApproval({
    onSuccess,
  });

  const buildResultContent = (
    approvedUsers: T[],
    notApprovedDetails: NotApprovedDetail[],
  ) => {
    const approvedLines =
      approvedUsers.length > 0
        ? approvedUsers.map(user => '- ' + getLabel(user))
        : [APPROVE_RESULT_NONE];
    const notApprovedLines =
      notApprovedDetails.length > 0
        ? notApprovedDetails.map(
            item => '- ' + item.label + ' (' + item.reason + ')',
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
      label: getLabel(user),
      reason: APPROVE_REASON_NOT_SUBMITTED,
    })),
    ...alreadyApproved.map(user => ({
      label: getLabel(user),
      reason: APPROVE_REASON_ALREADY_APPROVED,
    })),
    ...failed.map(user => ({
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
    const notSubmitted: T[] = [];
    const pending: T[] = [];
    const alreadyApproved: T[] = [];
    const invalidTargets: T[] = [];

    selected.forEach(item => {
      const submitted = status.isSubmitted(item);
      const approved = status.isApproved(item);

      if (!submitted) {
        notSubmitted.push(item);
        return;
      }
      if (approved) {
        alreadyApproved.push(item);
        return;
      }
      if (getSubmissionId(item) == null) {
        invalidTargets.push(item);
        return;
      }
      pending.push(item);
    });

    if (pending.length === 0) {
      info({
        title: APPROVE_RESULT_TITLE,
        centered: true,
        content: buildResultContent(
          [],
          buildNotApprovedDetails(
            notSubmitted,
            alreadyApproved,
            invalidTargets,
          ),
        ),
      });
      return;
    }

    confirm({
      title: APPROVE_CONFIRM_TITLE,
      content: APPROVE_ALERT,
      okText: APPROVE_OK_TEXT,
      cancelText: APPROVE_CANCEL_TEXT,
      centered: true,
      onOk: async () => {
        try {
          const approvalTargets = pending.flatMap(item => {
            const submissionId = getSubmissionId(item);
            return submissionId == null
              ? []
              : [
                  {
                    graduationUserId: getId(item),
                    submissionId,
                  },
                ];
          });

          const result = await approveGraduationUsers(approvalTargets);
          const approvedIdSet = new Set(result.approvedIds);
          const approved = pending.filter(item =>
            approvedIdSet.has(getId(item)),
          );
          const failed = pending.filter(
            item => !approvedIdSet.has(getId(item)),
          );

          info({
            title: APPROVE_RESULT_TITLE,
            centered: true,
            content: buildResultContent(
              approved,
              buildNotApprovedDetails(
                notSubmitted,
                alreadyApproved,
                [...invalidTargets, ...failed],
              ),
            ),
          });

          if (result.successCount > 0) {
            toast.success(APPROVE_SUCCESS);
          } else if (result.failureCount > 0) {
            toast.error(APPROVE_FAILED);
          } else {
            toast.warning(APPROVE_NOTHING);
          }
        } catch {
          /* ?ㅽ뙣 ?덈궡??MutationCache ?꾩뿭 ?좎뒪???ъ슜 */
        }
      },
    });
  };

  return { handleApproveSelected };
}
