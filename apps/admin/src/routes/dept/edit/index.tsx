import { Editor } from '@aics-client/tiptap';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { Button, message } from 'antd';
import { useState } from 'react';
import { useAboutServicePostApiV1Abouts } from '~/apis/admin/queries';
import { useAboutServicePatchApiV1Abouts } from '~/apis/admin/queries';
import { UseAboutServiceGetApiV1AboutsKeyFn } from '~/apis/community/queries';
import { useAboutServiceGetApiV1AboutsSuspense } from '~/apis/community/queries/suspense';
import { queryClient } from '~/utils/get-query-client';

export const Route = createFileRoute('/dept/edit/')({
  component: DeptEditPage,
});

const CATEGORY = 'DEPT_INTRO';

function DeptEditPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const { data } = useAboutServiceGetApiV1AboutsSuspense({
    category: CATEGORY,
  });
  const isContentEmpty = data.content === null;
  const [content, setContent] = useState(data.content);
  const { mutate: postDeptIntro } = useAboutServicePostApiV1Abouts();
  const { mutate: patchDeptIntro } = useAboutServicePatchApiV1Abouts();

  const handleSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: UseAboutServiceGetApiV1AboutsKeyFn({ category: CATEGORY }),
    });
    await messageApi.open({
      type: 'success',
      content: '소개글이 성공적으로 저장되었습니다.',
      duration: 0.7,
    });
    router.history.back();
  };

  const handleError = () => {
    messageApi.open({
      type: 'error',
      content: '소개글을 저장하는 도중 오류가 발생했습니다.',
    });
  };

  const handlePostDeptIntro = () => {
    postDeptIntro(
      { requestBody: { category: CATEGORY, content } },
      {
        onSuccess: () => {
          handleSuccess();
        },
        onError: () => {
          handleError();
        },
      },
    );
  };

  const handlePatchDeptIntro = () => {
    patchDeptIntro(
      { category: CATEGORY, requestBody: { content } },
      {
        onSuccess: () => {
          handleSuccess();
        },
        onError: () => {
          handleError();
        },
      },
    );
  };

  const handleSave = () => {
    if (isContentEmpty) {
      handlePostDeptIntro();
    } else {
      handlePatchDeptIntro();
    }
  };

  return (
    <>
      {contextHolder}
      <section className="flex flex-col w-full gap-8">
        <h1 className="text-3xl font-bold">학부 소개</h1>
        <section className="border-y py-8 border-gray-200">
          <Editor
            editorContent={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </section>
        <Button type="primary" className="self-end" onClick={handleSave}>
          저장하기
        </Button>
      </section>
    </>
  );
}

export default DeptEditPage;
