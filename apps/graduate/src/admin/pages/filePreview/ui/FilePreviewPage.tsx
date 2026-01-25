import { useNavigate, useSearch } from '@tanstack/react-router';
import { Button, Spin } from 'antd';
import { useEffect, useRef, useState } from 'react';

import { API_URL, KEYS, ROUTE } from '~/shared/constants';
import { useToast } from '~/shared/hooks';
import { queryClient } from '~/shared/utils';

import FilePreviewContent from './FilePreviewContent';
import FilePreviewToolbar from './FilePreviewToolbar';
import { getSubmissionTypeIndex } from '../../schedule/constants';
import { useFile } from '../hooks';
import * as style from '../styles/PreviewPage.css';

import { useStudentDetail } from '~/admin/features/studentDetail';
import { useUpdateGraduationUsersBatchApprove } from '~/admin/shared/hooks';

export default function FilePreviewPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { fileId, graduationUserId } = useSearch({
    from: '/_afterLogin/file-preview',
  });
  const { data: studentDetail, isLoading: isStudentLoading } =
    useStudentDetail(graduationUserId);
  const {
    data: fileData,
    isPending: isFileLoading,
    error,
    refetch,
  } = useFile(fileId, studentDetail?.status.type, !!studentDetail);

  const [isToolbarVisible, setIsToolbarVisible] = useState(true);
  const hideTimeoutRef = useRef<number | null>(null);

  const { approveGraduationUsers, mutation: approvalMutation } =
    useUpdateGraduationUsersBatchApprove({
      onSuccess: async () => {
        toast.success('승인이 완료되었습니다.');
        await queryClient.invalidateQueries({
          queryKey: [...KEYS.STUDENT_FILE],
        });
        await refetch();
      },
    });

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const setHideTimeout = (delay: number) => {
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      setIsToolbarVisible(false);
    }, delay);
  };

  useEffect(() => {
    setHideTimeout(3000);
    return clearHideTimeout;
  }, []);

  const handleShowToolbar = () => {
    setIsToolbarVisible(true);
    clearHideTimeout();
  };

  const handleHideToolbar = () => {
    setHideTimeout(1000);
  };

  if (isStudentLoading || isFileLoading) {
    return (
      <div className={style.container}>
        <Spin size='large' style={{ marginTop: 100 }} />
      </div>
    );
  }

  if (!fileData || !studentDetail) {
    return (
      <div className={style.container}>
        <div style={{ marginTop: 100, textAlign: 'center' }}>
          데이터를 불러올 수 없습니다.
        </div>
      </div>
    );
  }

  const { scheduleId, file, approval } = fileData;

  const { name, studentId, status } = studentDetail;

  const handleGoBack = () => {
    navigate({
      to: ROUTE.ALL,
      search: { graduationUserId: graduationUserId },
    });
  };

  const handleApprove = async () => {
    try {
      await approveGraduationUsers([graduationUserId]);
    } catch (error) {
      toast.error('승인에 실패했습니다.');
    }
  };

  const canNavigate =
    status.type === 'THESIS' &&
    status.midThesis.submitted === true &&
    status.finalThesis.submitted === true;

  const handleNextFile = () => {
    if (!canNavigate) return;

    if (scheduleId === getSubmissionTypeIndex('MIDTHESIS')) {
      navigate({
        to: ROUTE.FILE_PREVIEW,
        search: {
          fileId: status.finalThesis.id!,
          graduationUserId: graduationUserId,
        },
      });
    } else if (scheduleId === getSubmissionTypeIndex('FINALTHESIS')) {
      navigate({
        to: ROUTE.FILE_PREVIEW,
        search: {
          fileId: status.midThesis.id!,
          graduationUserId: graduationUserId,
        },
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
          fileUrl={`${API_URL}${file.physicalPath}`}
          error={error}
          onRetry={() => refetch()}
        />

        <div
          className={style.toolbarTriggerArea}
          onMouseEnter={handleShowToolbar}
          onMouseLeave={handleHideToolbar}
        >
          <div className={style.toolbarWrapper} data-visible={isToolbarVisible}>
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
    </div>
  );
}
