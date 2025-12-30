import { useNavigate, useSearch } from '@tanstack/react-router';
import { Button, message, Spin } from 'antd';

import { KEYS, ROUTE } from '~/shared/constants';
import { useUpdateGraduationUsersBatchApprove } from '~/shared/hooks';
import { queryClient } from '~/shared/utils';

import { useStudentDetail } from '~/features/studentDetail';

import FilePreviewContent from './FilePreviewContent';
import FilePreviewToolbar from './FilePreviewToolbar';
import { getSubmissionTypeIndex } from '../../schedule/constant';
import { useFile } from '../hooks';
import * as style from '../styles/PreviewPage.css';


export default function FilePreviewPage() {
  const navigate = useNavigate();
  const { fileId, type } = useSearch({
    from: '/_afterLogin/file-preview',
  });

  const {
    data: fileData,
    isPending,
    error,
    refetch,
  } = useFile(fileId, type);

  const { data: studentDetail } = useStudentDetail(
    fileData?.graduationUserid ?? 0,
  );

  if (isPending || !fileData || !studentDetail) {
    return (
      <div className={style.container}>
        <Spin size='large' style={{ marginTop: 100 }} />
      </div>
    );
  }

  const { graduationUserid, scheduleId, file, approval } = fileData;

  const { name, studentId, status } = studentDetail;

  const { approveGraduationUsers, mutation: approvalMutation } =
    useUpdateGraduationUsersBatchApprove({
      onSuccess: async () => {
        message.success('승인이 완료되었습니다.');
        await queryClient.invalidateQueries({
          queryKey: [KEYS.STUDENT_FILE],
        });
        await refetch();
      },
    });

  const handleGoBack = () => {
    navigate({
      to: ROUTE.ALL,
      search: { graduationUserId: graduationUserid },
    });
  };

  const handleApprove = async () => {
    try {
      await approveGraduationUsers([graduationUserid]);
    } catch (error) {
      message.error('승인에 실패했습니다.');
    }
  };

  const canNavigate =
    status.type === 'THESIS' &&
    status.midThesis.submitted !== undefined &&
    status.finalThesis.submitted !== undefined;

  const handleNextFile = () => {
    if (!canNavigate) return;

    if (scheduleId === getSubmissionTypeIndex('MIDTHESIS')) {
      navigate({
        to: ROUTE.FILE_PREVIEW,
        search: { fileId: status.finalThesis.fileId!, type: status.type },
      });
    } else if (scheduleId === getSubmissionTypeIndex('FINALTHESIS')) {
      navigate({
        to: ROUTE.FILE_PREVIEW,
        search: { fileId: status.midThesis.fileId!, type: status.type },
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.backButtonWrapper}>
        <Button onClick={handleGoBack} type='text' size='large'>
          뒤로가기
        </Button>
      </div>
      <div className={style.filePreviewContainer}>
        <FilePreviewContent
          fileUrl={file.physicalPath}
          error={error}
          onRetry={() => refetch()}
        />

        <div className={style.toolbarWrapper}>
          <FilePreviewToolbar
            studentId={studentId}
            name={name}
            isApproved={approval ?? false}
            onApprove={handleApprove}
            onChangeFile={handleNextFile}
            canNavigate={canNavigate}
            isApproving={approvalMutation.isPending}
          />
        </div>
      </div>
    </div>
  );
}
