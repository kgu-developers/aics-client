import { Link, useRouter } from '@tanstack/react-router';
import { Button, Modal, message } from 'antd';
import DOMPurify from 'dompurify';
import {
  ArrowLeft,
  Calendar,
  Download,
  Eye,
  PencilIcon,
  Trash2Icon,
} from 'lucide-react';

import { usePostServicePatchApiV1PostsByPostIdDelete } from '~/apis/admin/queries';
import { usePostServiceGetApiV1PostsKey } from '~/apis/community/queries';

import { EDIT_POST_PATH_MAP, PATH, type PostCategory } from '~/constants/path';
import useModal from '~/hooks/use-modal';
import { queryClient } from '~/utils/get-query-client';
import { extractFileName } from '~/utils/utils';

interface HeaderProps {
  title: string;
  author: string;
  views: number;
  createdAt: string;
  file?: {
    id: number;
    physicalPath: string;
  };
}

function Board({ children }: { children: React.ReactNode }) {
  return <article>{children}</article>;
}

function Header({ title, author, views, createdAt, file }: HeaderProps) {
  return (
    <div>
      <h1 className="font-semibold text-4xl p-8 pb-4">{title}</h1>
      <div className="flex justify-between border-t border-gray-200 px-8 pt-4 text-gray-500 text-sm">
        <p>{author}</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 sm:visible invisible">
            <Eye size={'0.875rem'} />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={'0.875rem'} />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
      {file && (
        <button
          type="button"
          className="flex items-center self-end px-4 py-2 text-sm font-semibold gap-2"
        >
          <Download size={'0.875rem'} />
          <span>{extractFileName(file.physicalPath)}</span>
        </button>
      )}
    </div>
  );
}

function Content({ content }: { content: string }) {
  return (
    <div
      className="px-10 py-8 whitespace-pre-line"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    />
  );
}

function DeleteButton({ postId }: { postId: number }) {
  const { mutate } = usePostServicePatchApiV1PostsByPostIdDelete();
  const { isOpen, openModal, closeModal } = useModal();
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const handleSuccess = async () => {
    closeModal();
    await messageApi.open({
      type: 'success',
      content: '게시글이 성공적으로 삭제되었습니다.',
      duration: 0.7,
    });

    queryClient.invalidateQueries({
      queryKey: [usePostServiceGetApiV1PostsKey],
    });

    router.history.back();
  };

  const handleError = () => {
    closeModal();
    messageApi.open({
      type: 'error',
      content: '게시글 삭제에 실패했습니다.',
    });
  };

  const handleDelete = () => {
    mutate(
      { postId: postId },
      {
        onSuccess: handleSuccess,
        onError: handleError,
      },
    );
  };

  return (
    <>
      {contextHolder}
      <Button
        color="danger"
        variant="solid"
        className="flex items-center gap-2 text-sm"
        onClick={openModal}
      >
        <Trash2Icon size={'1rem'} />
        삭제하기
      </Button>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title="게시글 삭제"
        footer={
          <>
            <Button color="danger" variant="solid" onClick={handleDelete}>
              삭제
            </Button>
            <Button color="default" variant="outlined" onClick={closeModal}>
              취소
            </Button>
          </>
        }
        width={500}
      >
        정말 삭제하시겠습니까?
      </Modal>
    </>
  );
}

interface FooterProps {
  prevPost?: {
    postId: number;
    title: string;
  };
  nextPost?: {
    postId: number;
    title: string;
  };
  to: PostCategory;
  postId: number;
}

function Footer({ prevPost, nextPost, to, postId }: FooterProps) {
  const editURL = to === PATH.NEWS ? PATH.EDIT_NEWS : PATH.EDIT_NOTICE;

  return (
    <div className="flex flex-col gap-6 items-start">
      <div className="w-full flex flex-col border-t border-b border-gray-200">
        {prevPost ? (
          <Link
            to={`${EDIT_POST_PATH_MAP[to]}`}
            params={{ postId: prevPost.postId.toString() }}
            className="flex gap-4 p-5 border-b border-gray-200"
          >
            <span className="font-semibold">이전</span>
            <h2>{prevPost.title}</h2>
          </Link>
        ) : (
          <div className="p-5">이전 글이 없습니다</div>
        )}
        {nextPost ? (
          <Link
            to={`${EDIT_POST_PATH_MAP[to]}`}
            params={{ postId: prevPost?.postId.toString() }}
            className="flex gap-4 p-5"
          >
            <span className="font-semibold">다음</span>
            <h2>{nextPost.title}</h2>
          </Link>
        ) : (
          <div className="p-5">다음 글이 없습니다.</div>
        )}
      </div>

      <div className="flex items-center justify-between w-full">
        <Button className="flex items-center gap-2 text-sm">
          <ArrowLeft size={'1rem'} />
          <Link to={to} search={{ page: 0, query: '' }}>
            목록으로
          </Link>
        </Button>

        <div className="flex items-center gap-3">
          <Button
            color="primary"
            variant="solid"
            className="flex items-center gap-2 text-sm"
          >
            <PencilIcon size={'1rem'} />
            <Link to={`${editURL}${postId.toString()}`}>수정하기</Link>
          </Button>
          <DeleteButton postId={postId} />
        </div>
      </div>
    </div>
  );
}

Board.Header = Header;
Board.Content = Content;
Board.Footer = Footer;

export { Board };
