import { Link, useNavigate } from '@tanstack/react-router';
import { Button, List, Modal, Pagination, type PaginationProps } from 'antd';
import { Pin, Trash2Icon } from 'lucide-react';
import { useDeletePost } from '~/apis/admin/queries';
import type { PostSummaryResponse } from '~/apis/community/requests';
import useModal from '~/hooks/use-modal';

function DeleteButton({ selected }: { selected: number }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { mutate } = useDeletePost();

  const handleDelete = () => {
    mutate(
      { postId: selected },
      {
        onSuccess: () => {
          closeModal();
        },
      },
    );
  };

  return (
    <>
      <button
        type="button"
        className="p-1 transition-colors duration-150 rounded-lg cursor-pointer hover:bg-red-300"
        onClick={openModal}
      >
        <Trash2Icon color="red" />
      </button>
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
interface PostListItemProps {
  post: PostSummaryResponse;
  to: string;
}

function PostListItem({ post, to }: PostListItemProps) {
  return (
    <List.Item className="flex items-center gap-3 transition-colors duration-100 hover:bg-gray-50">
      <Link
        to={`${to}${post.postId.toString()}`}
        className="flex justify-between w-full p-1"
      >
        <div className="flex items-center">
          {post.isPinned ? (
            <Pin fill="black" size={'1.25rem'} />
          ) : (
            <span className="text-black">{post.postId}</span>
          )}
        </div>
        <span className="text-black">{post.title}</span>
        <span className="text-black">{post.createdAt}</span>
      </Link>
      <DeleteButton selected={post.postId} />
    </List.Item>
  );
}

interface PostListProps {
  title: string;
  to: string;
  currentPage: number;
  data: PostSummaryResponse[];
  total: number;
}

function PostsList({ title, to, currentPage, data, total }: PostListProps) {
  const navigate = useNavigate({ from: '/notice' });

  const handlePageChange: PaginationProps['onChange'] = (currentPage) => {
    navigate({
      search: (prev) => ({ ...prev, page: currentPage - 1 }),
    });
  };

  return (
    <>
      <List
        header={<div className="text-lg font-semibold">{title}</div>}
        itemLayout="horizontal"
        bordered
        size="large"
        dataSource={data}
        renderItem={(post) => <PostListItem to={to} post={post} />}
      />
      <Pagination
        align="center"
        showSizeChanger={false}
        defaultCurrent={1}
        current={currentPage + 1}
        total={total}
        onChange={handlePageChange}
      />
    </>
  );
}

export default PostsList;
