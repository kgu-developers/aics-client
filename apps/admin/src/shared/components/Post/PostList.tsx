import { Link, useNavigate } from '@tanstack/react-router';
import {
  Button,
  List,
  Modal,
  Pagination,
  type PaginationProps,
  message,
} from 'antd';
import { Pin, PlusIcon, Trash2Icon } from 'lucide-react';

import {
  NEW_POST_PATH_MAP,
  POST_DETAIL_PATH_MAP,
  type PostCategory,
} from '~/shared/constants/path';
import { MESSAGES } from '~/shared/constants/post.constants';
import { useDeletePost, useModal } from '~/shared/hooks';

import type { PostSummaryResponse } from '~/apis/community/requests';

function DeleteButton({ postId, title }: { postId: number; title: string }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [messageApi, contextHolder] = message.useMessage();
  const { deletePost } = useDeletePost({ messageApi });

  const handleDelete = () => {
    closeModal();
    deletePost({ postId: postId });
  };

  return (
    <>
      {contextHolder}
      <button
        type='button'
        className='p-1 transition-colors duration-150 rounded-lg cursor-pointer hover:bg-red-300'
        onClick={openModal}
      >
        <Trash2Icon color='red' />
      </button>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title={title}
        footer={
          <>
            <Button color='danger' variant='solid' onClick={handleDelete}>
              {MESSAGES.button.delete}
            </Button>
            <Button color='default' variant='outlined' onClick={closeModal}>
              {MESSAGES.button.cancel}
            </Button>
          </>
        }
        width={500}
      >
        {MESSAGES.confirm.deletePost}
      </Modal>
    </>
  );
}

interface PostListItemProps {
  post: PostSummaryResponse;
  to: PostCategory;
}

function PostListItem({ post, to }: PostListItemProps) {
  const { postId, title, createdAt, isPinned } = post;
  return (
    <List.Item className='flex items-center gap-3 transition-colors duration-100 hover:bg-gray-50'>
      <Link
        to={`${POST_DETAIL_PATH_MAP[to]}`}
        params={{ postId: postId.toString() }}
        className='flex justify-between w-full p-1'
      >
        <div className='flex items-center'>
          {isPinned ? (
            <Pin fill='black' size={'1.25rem'} />
          ) : (
            <span className='text-black'>{postId}</span>
          )}
        </div>
        <span className='text-black'>{title}</span>
        <span className='text-black'>{createdAt}</span>
      </Link>
      <DeleteButton postId={postId} title={title} />
    </List.Item>
  );
}

interface PostListProps {
  title: string;
  to: PostCategory;
  currentPage: number;
  data: PostSummaryResponse[];
  total: number;
}

export function PostList({
  title,
  to,
  currentPage,
  data,
  total,
}: PostListProps) {
  const navigate = useNavigate({ from: to });

  const handlePageChange: PaginationProps['onChange'] = currentPage => {
    navigate({
      search: prev => ({ ...prev, page: currentPage - 1 }),
    });
  };

  return (
    <>
      <List
        header={
          <div className='flex items-center justify-between p-2'>
            <div className='text-lg font-semibold'>{title}</div>
            <Link to={NEW_POST_PATH_MAP[to]}>
              <Button
                color='primary'
                variant='solid'
                icon={<PlusIcon size={'1rem'} />}
                className='flex items-center gap-1'
              >
                {MESSAGES.button.create}
              </Button>
            </Link>
          </div>
        }
        itemLayout='horizontal'
        bordered
        size='large'
        dataSource={data}
        renderItem={post => <PostListItem to={to} post={post} />}
      />
      <Pagination
        align='center'
        showSizeChanger={false}
        defaultCurrent={1}
        current={currentPage + 1}
        total={total}
        onChange={handlePageChange}
      />
    </>
  );
}
