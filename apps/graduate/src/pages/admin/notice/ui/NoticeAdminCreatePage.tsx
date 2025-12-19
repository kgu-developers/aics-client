import { useNavigate } from '@tanstack/react-router';
import { Button, Checkbox, Divider, Input, Upload } from 'antd';
import type { CheckboxChangeEvent, UploadProps } from 'antd';
import { useState } from 'react';

import { ROUTE } from '~/shared/constants';
import { useNoticeDetail, useToast } from '~/shared/hooks';

import type { NoticeFormItem } from '../model/notices';
import * as style from '../styles/NoticeAdminCreatePage.css';
import type { NoticeFormItem } from '../types/notices';

const { TextArea } = Input;

interface NoticeAdminCreatePageProps {
  noticeId?: number;
}

export default function NoticeAdminCreatePage({
  noticeId,
}: NoticeAdminCreatePageProps) {
  const navigate = useNavigate();
  const isEditMode = !!noticeId;
  const { toast, confirm } = useToast();

  const { data: notice, isPending } = useNoticeDetail(noticeId ?? 0);

  const { createdAt, updatedAt } = notice ?? {};

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NoticeFormItem>({
    defaultValues: {
      title: '',
      content: '',
      isPinned: false,
      uploadedFiles: [],
    },
  });

  useEffect(() => {
    if (notice && isEditMode) {
      reset({
        title: notice.title ?? '',
        content: notice.content ?? '',
        isPinned: notice.isPinned ?? false,
        uploadedFiles: [],
      });
    }
  }, [notice, isEditMode, reset]);

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    beforeUpload: file => {
      toast.info(`${file.name} 파일이 선택되었습니다.`);
      return false;
    },
  };

  const onSubmit = () => {
    toast.success(
      isEditMode ? '공지사항이 수정되었습니다.' : '공지사항이 작성되었습니다.',
    );
    handleGoBack();
  };

  const handleDelete = () => {
    confirm({
      title: '정말 삭제하시겠습니까?',
      onOk: () => {
        toast.success('공지사항이 삭제되었습니다.');
        handleGoBack();
      },
    });
  };

  const handleGoBack = () => {
    navigate({ to: ROUTE.NOTICE });
  };

  if (isEditMode && isPending) {
    return (
      <div className={style.container}>
        <div className={style.backButtonWrapper}>
          <Button onClick={handleGoBack} type='text' size='large'>
            목록으로
          </Button>
        </div>
        <div className={style.formCard}>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.backButtonWrapper}>
        <Button onClick={handleGoBack} type='text' size='large'>
          목록으로
        </Button>
      </div>

      <div className={style.formCard}>
        <h1 className={style.formTitle}>
          {isEditMode ? '공지사항 수정' : '공지사항 작성'}
        </h1>

        {isEditMode && (
          <div className={style.metaInfo}>
            <div className={style.metaItem}>작성일: {createdAt}</div>
            <div className={style.metaItem}>수정일: {updatedAt}</div>
          </div>
        )}

        <div className={style.formField}>
          <label className={style.label} htmlFor='title'>
            제목 <span className={style.required}>*</span>
          </label>
          <Input
            id='title'
            name='title'
            value={title}
            onChange={handleInputChange}
            placeholder='제목을 입력하세요'
            size='large'
          />
        </div>

        <div className={style.formField}>
          <Checkbox checked={isPinned} onChange={handleCheckboxChange}>
            <span className={style.checkboxLabel}>상단 고정 (공지로 표시)</span>
          </Checkbox>
        </div>

        <div className={style.formField}>
          <label className={style.label} htmlFor='content'>
            내용 <span className={style.required}>*</span>
          </label>
          <TextArea
            id='content'
            name='content'
            value={content}
            onChange={handleInputChange}
            placeholder='내용을 입력하세요'
            rows={15}
            className={style.textarea}
          />
        </div>

        <div className={style.uploadSection}>
          <label className={style.label} htmlFor='upload'>
            첨부파일
          </label>
          <Upload {...uploadProps} id='upload' name='upload'>
            <Button>파일 선택</Button>
          </Upload>
        </div>

        <Divider />

        <div className={style.actionSection}>
          <div className={style.leftActions}>
            {isEditMode && (
              <Button onClick={handleDelete} size='large'>
                삭제
              </Button>
            )}
          </div>
          <div className={style.rightActions}>
            <Button onClick={handleGoBack} size='large'>
              취소
            </Button>
            <Button type='primary' onClick={handleSave} size='large'>
              {isEditMode ? '수정' : '작성'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
