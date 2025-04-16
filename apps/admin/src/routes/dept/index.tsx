import { Link, createFileRoute } from '@tanstack/react-router';
import { Button } from 'antd';
import DOMPurify from 'dompurify';

import { useAboutServiceGetApiV1AboutsSuspense } from '~/apis/community/queries/suspense';
import { PATH } from '~/constants/path';

export const Route = createFileRoute('/dept/')({
  component: DeptPage,
});

const CATEGORY = 'DEPT_INTRO';

function DeptPage() {
  const { data } = useAboutServiceGetApiV1AboutsSuspense({
    category: CATEGORY,
  });

  const isDeptIntroEmpty = data.content === '' || data.content === '<p></p>';

  return (
    <section className="flex flex-col w-full gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold ">학부 소개</h1>
        <Link to={PATH.EDIT_DEPT} className="self-end">
          {isDeptIntroEmpty ? (
            <Button type="primary">작성하기</Button>
          ) : (
            <Button type="primary">수정하기</Button>
          )}
        </Link>
      </div>
      {isDeptIntroEmpty ? (
        <span className="border-y py-8 border-gray-200">
          작성된 학부 소개가 없습니다.
        </span>
      ) : (
        <section
          className="border-y py-8 border-gray-200 flex flex-col gap-4"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
        />
      )}
    </section>
  );
}

export default DeptPage;
