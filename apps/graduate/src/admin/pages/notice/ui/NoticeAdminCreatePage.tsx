import { useNavigate } from '@tanstack/react-router';
import { Button, Checkbox, Divider, Input, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { API_ADMIN_URL, ROUTE } from '~/shared/constants';
import { useNoticeDetail, useToast } from '~/shared/hooks';

import { submitNoticeFile } from '../api/submitNoticeFile';
import { useCreateNotice, useUpdateNotice, useDeleteNotice } from '../hooks';
import type { NoticeFormItem } from '../model/notices';
import * as style from '../styles/NoticeAdminCreatePage.css';

import { TextEditor } from '~/admin/shared/components';

interface NoticeAdminCreatePageProps {
  noticeId?: number;
}

export default function NoticeAdminCreatePage({
  noticeId,
}: NoticeAdminCreatePageProps) {
  const navigate = useNavigate();
  const isEditMode = !!noticeId;
  const { toast, confirm } = useToast();

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadedFileId, setUploadedFileId] = useState<number | undefined>();

  const { data: notice, isPending } = useNoticeDetail(noticeId ?? 0);
  const { mutate: createNotice } = useCreateNotice();
  const { mutate: updateNotice } = useUpdateNotice(noticeId ?? 0);
  const { mutate: deleteNotice } = useDeleteNotice();

  const { createdAt } = notice ?? {};

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
      category: 'GRADUATION',
    },
  });

  useEffect(() => {
    if (notice && isEditMode) {
      reset({
        title: notice.title ?? '',
        content: notice.content ?? '',
        isPinned: notice.isPinned ?? false,
        category: 'GRADUATION',
      });

      if (notice.file) {
        const fileName =
          notice.file.physicalPath.split('/').pop() || '첨부파일';
        setFileList([
          {
            uid: '-1',
            name: fileName,
            status: 'done',
            url: `${API_ADMIN_URL}${notice.file.physicalPath}`,
          },
        ]);
      }
    }
  }, [notice, isEditMode, reset]);

  const uploadProps: UploadProps = {
    name: 'file',
    fileList: fileList,
    maxCount: 1,
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        const response = await submitNoticeFile(file as File);
        const { id } = response.data;

        setUploadedFileId(id);

        toast.success(`${(file as File).name} 파일이 업로드되었습니다.`);
        onSuccess?.(response.data);
      } catch (error) {
        toast.error('파일 업로드에 실패했습니다.');
        onError?.(error as Error);
      }
    },
    onChange: ({ fileList: newFileList }) => {
      setFileList(newFileList);
    },
    onRemove: () => {
      setUploadedFileId(undefined);
    },
  };

  const onSubmit = (data: NoticeFormItem) => {
    if (isEditMode) {
      updateNotice(
        {
          title: data.title,
          content: data.content,
          isPinned: data.isPinned,
          category: data.category,
          fileId: uploadedFileId,
        },
        {
          onSuccess: () => {
            toast.success('공지사항이 수정되었습니다.');
            handleGoBack();
          },
          onError: () => {
            toast.error('공지사항 수정에 실패했습니다.');
          },
        },
      );
    } else {
      createNotice(
        {
          title: data.title,
          content: data.content,
          isPinned: data.isPinned,
          category: data.category,
          fileId: uploadedFileId,
        },
        {
          onSuccess: () => {
            toast.success('공지사항이 작성되었습니다.');
            handleGoBack();
          },
          onError: () => {
            toast.error('공지사항 작성에 실패했습니다.');
          },
        },
      );
    }
  };

  const handleDelete = () => {
    if (!noticeId) return;

    confirm({
      title: '정말 삭제하시겠습니까?',
      onOk: () => {
        deleteNotice(noticeId, {
          onSuccess: () => {
            toast.success('공지사항이 삭제되었습니다.');
            handleGoBack();
          },
          onError: () => {
            toast.error('공지사항 삭제에 실패했습니다.');
          },
        });
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
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formField}>
            <label className={style.label}>
              제목 <span className={style.required}>*</span>
            </label>
            <Controller
              name='title'
              control={control}
              rules={{ required: '제목을 입력해주세요.' }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder='제목을 입력하세요'
                  size='large'
                  status={errors.title ? 'error' : ''}
                />
              )}
            />
            {errors.title && (
              <p className={style.errorMessage}>{errors.title.message}</p>
            )}
          </div>

          <div className={style.formField}>
            <Controller
              name='isPinned'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  checked={value}
                  onChange={e => onChange(e.target.checked)}
                >
                  <span className={style.checkboxLabel}>
                    상단 고정 (공지로 표시)
                  </span>
                </Checkbox>
              )}
            />
          </div>

          <div className={style.formField}>
            <label className={style.label}>
              내용 <span className={style.required}>*</span>
            </label>
            <Controller
              name='content'
              control={control}
              rules={{ required: '내용을 입력해주세요.' }}
              render={({ field: { value, onChange } }) => (
                <TextEditor
                  title=''
                  value={value || ''}
                  onChange={onChange}
                  onSave={() => {}}
                  isSaved={true}
                  className={style.textarea}
                />
              )}
            />
            {errors.content && (
              <p className={style.errorMessage}>{errors.content.message}</p>
            )}
          </div>

          <div className={style.formField}>
            <label className={style.label}>첨부파일</label>
            <Upload {...uploadProps}>
              <Button>파일 선택</Button>
            </Upload>
          </div>

          <Divider />

          <div className={style.actionSection}>
            <div className={style.leftActions}>
              {isEditMode && (
                <Button onClick={handleDelete} size='large' danger>
                  삭제
                </Button>
              )}
            </div>
            <div className={style.rightActions}>
              <Button onClick={handleGoBack} size='large'>
                취소
              </Button>
              <Button type='primary' htmlType='submit' size='large'>
                {isEditMode ? '수정' : '작성'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
