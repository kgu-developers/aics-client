import { Link, useRouter } from '@tanstack/react-router'
import { Button, Modal, message } from 'antd'
import DOMPurify from 'dompurify'
import {
  ArrowLeft,
  Calendar,
  Download,
  Eye,
  PencilIcon,
  Trash2Icon,
} from 'lucide-react'

import { EDIT_POST_PATH_MAP, type PostCategory } from '~/constants/path'
import { useModal } from '~/hooks/useModal'
import { MESSAGES } from '~/shared/constant/post.constants'
import { useDeletePost } from '~/shared/hooks/Post'
import { extractFileName } from '~/shared/utils/utils'

interface HeaderProps {
  title: string
  author: string
  views: number
  createdAt: string
  file?: {
    id: number
    physicalPath: string
  }
}

function Board({ children }: { children: React.ReactNode }) {
  return <article>{children}</article>
}

function Header({ title, author, views, createdAt, file }: HeaderProps) {
  return (
    <div className="flex flex-col">
      <h1 className="p-8 pb-4 text-4xl font-semibold">{title}</h1>
      <div className="flex justify-between px-8 pt-4 text-sm text-gray-500 border-t border-gray-200">
        <p>{author}</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center invisible gap-2 sm:visible">
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
          className="flex items-center self-end gap-2 px-4 py-2 mr-4 text-sm font-semibold cursor-pointer"
        >
          <Download size={'0.875rem'} />
          <span>{extractFileName(file.physicalPath)}</span>
        </button>
      )}
    </div>
  )
}

function Content({ content }: { content: string }) {
  return (
    <div
      className="px-10 py-8 whitespace-pre-line"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    />
  )
}

function DeleteButton({ postId }: { postId: number }) {
  const { isOpen, openModal, closeModal } = useModal()
  const [messageApi, contextHolder] = message.useMessage()
  const router = useRouter()
  const { deletePost } = useDeletePost({
    messageApi,
    historyBack: () => router.history.back(),
  })

  const handleDelete = () => {
    closeModal()
    deletePost({ postId: postId })
  }

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
        {MESSAGES.button.delete}
      </Button>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title={MESSAGES.title.deletePost}
        footer={
          <>
            <Button color="danger" variant="solid" onClick={handleDelete}>
              {MESSAGES.button.delete}
            </Button>
            <Button color="default" variant="outlined" onClick={closeModal}>
              {MESSAGES.button.cancel}
            </Button>
          </>
        }
        width={500}
      >
        {MESSAGES.confirm.deletePost}
      </Modal>
    </>
  )
}

interface FooterProps {
  prevPost?: {
    postId: number
    title: string
  }
  nextPost?: {
    postId: number
    title: string
  }
  to: PostCategory
  postId: number
}

function Footer({ prevPost, nextPost, to, postId }: FooterProps) {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-col w-full border-t border-b border-gray-200">
        {prevPost ? (
          <Link
            to={`${EDIT_POST_PATH_MAP[to]}`}
            params={{ postId: prevPost.postId.toString() }}
            className="flex gap-4 p-5 border-b border-gray-200"
          >
            <span className="font-semibold">{MESSAGES.button.prev}</span>
            <h2>{prevPost.title}</h2>
          </Link>
        ) : (
          <div className="p-5">{MESSAGES.PREV_POST_EMPTY}</div>
        )}
        {nextPost ? (
          <Link
            to={`${EDIT_POST_PATH_MAP[to]}`}
            params={{ postId: prevPost?.postId.toString() }}
            className="flex gap-4 p-5"
          >
            <span className="font-semibold">{MESSAGES.button.next}</span>
            <h2>{nextPost.title}</h2>
          </Link>
        ) : (
          <div className="p-5">{MESSAGES.NEXT_POST_EMPTY}</div>
        )}
      </div>

      <div className="flex items-center justify-between w-full">
        <Button className="flex items-center gap-2 text-sm">
          <ArrowLeft size={'1rem'} />
          <Link to={to} search={{ page: 0, query: '' }}>
            {MESSAGES.button.backToList}
          </Link>
        </Button>

        <div className="flex items-center gap-3">
          <Button
            color="primary"
            variant="solid"
            className="flex items-center gap-2 text-sm"
          >
            <PencilIcon size={'1rem'} />
            <Link
              to={EDIT_POST_PATH_MAP[to]}
              params={{ postId: postId.toString() }}
            >
              {MESSAGES.button.update}
            </Link>
          </Button>
          <DeleteButton postId={postId} />
        </div>
      </div>
    </div>
  )
}

Board.Header = Header
Board.Content = Content
Board.Footer = Footer

export { Board }
