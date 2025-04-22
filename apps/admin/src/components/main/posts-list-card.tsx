import { Link } from '@tanstack/react-router';
import { Card } from 'antd';
import { ArrowRightIcon } from 'lucide-react';

import type { PostSummaryResponse } from '~/apis/community/requests';

import { POST_DETAIL_PATH_MAP, type PostCategory } from '~/constants/path';

interface PostListCardProps {
  title: string;
  to: PostCategory;
  posts: PostSummaryResponse[];
}

function PostListCard({ title, to, posts }: PostListCardProps) {
  return (
    <Card
      title={title}
      extra={
        <Link to={to} search={{ page: 0, query: '' }}>
          <button
            type="button"
            className="flex gap-1 items-center text-black cursor-pointer"
          >
            더보기
            <ArrowRightIcon size={'1rem'} />
          </button>
        </Link>
      }
      className="w-full flex flex-col"
    >
      {posts?.map((post, index) => {
        const isLast = index === posts.length - 1;
        return (
          <div
            key={post.postId}
            className={`py-2  ${isLast ? '' : 'border-b border-gray-200'}`}
          >
            <Link
              to={`${POST_DETAIL_PATH_MAP[to]}`}
              params={{ postId: post?.postId.toString() }}
            >
              <span className="text-black">{post.title}</span>
            </Link>
          </div>
        );
      })}
    </Card>
  );
}

export { PostListCard };
