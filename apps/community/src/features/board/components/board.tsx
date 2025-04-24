import Link from 'next/link'

import DOMPurify from 'isomorphic-dompurify'

import { Button } from '@aics-client/design-system'
import {
  ArrowLeft,
  Calendar,
  Download,
  Eye,
} from '@aics-client/design-system/icons'

import * as styles from '~/features/board/components/board.css'

function Board({ children }: { children: React.ReactNode }) {
  return <article>{children}</article>
}

interface BoardHeaderProps {
  title: string
  author: string
  views: number
  createdAt: string
  file?: {
    logicalName: string
    physicalPath: string
  }
}

function BoardHeader({
  title,
  author,
  views,
  createdAt,
  file,
}: BoardHeaderProps) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <BoardMetadata author={author} views={views} createdAt={createdAt} />
      {file && <BoardFileDownload file={file} />}
    </div>
  )
}

function BoardMetadata({
  author,
  views,
  createdAt,
}: Pick<BoardHeaderProps, 'author' | 'views' | 'createdAt'>) {
  return (
    <div className={styles.informationWrapper}>
      <div>{author}</div>
      <div className={styles.flex}>
        <ViewCount count={views} />
        <CreatedAtDisplay date={createdAt} />
      </div>
    </div>
  )
}

function ViewCount({ count }: { count: number }) {
  return (
    <div className={styles.views}>
      <Eye size={'0.875rem'} />
      <span>{count}</span>
    </div>
  )
}

function CreatedAtDisplay({ date }: { date: string }) {
  return (
    <div className={styles.createdAt}>
      <Calendar size={'0.875rem'} />
      <span>{date}</span>
    </div>
  )
}

function BoardFileDownload({
  file,
}: { file: NonNullable<BoardHeaderProps['file']> }) {
  return (
    <button type="button" className={styles.file}>
      <Download size={'0.875rem'} />
      <span>{file.logicalName}</span>
    </button>
  )
}

function BoardContent({ content }: { content: string }) {
  return (
    <div
      className={styles.content}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    />
  )
}

interface PostNavigationItem {
  postId: number
  title: string
}

interface FooterProps {
  prevPost: PostNavigationItem
  nextPost: PostNavigationItem
  to: string
}

function BoardFooter({ prevPost, nextPost, to }: FooterProps) {
  return (
    <div className={styles.footer}>
      <PostNavigation prevPost={prevPost} nextPost={nextPost} to={to} />
      <ListButton to={to} />
    </div>
  )
}

function PostNavigation({
  prevPost,
  nextPost,
  to,
}: {
  prevPost: PostNavigationItem
  nextPost: PostNavigationItem
  to: string
}) {
  return (
    <div className={styles.postItems}>
      <PrevPostLink post={prevPost} to={to} />
      <NextPostLink post={nextPost} to={to} />
    </div>
  )
}

function PrevPostLink({
  post,
  to,
}: {
  post: PostNavigationItem
  to: string
}) {
  if (!post) {
    return <div className={styles.prevPost}>이전 글이 없습니다</div>
  }

  return (
    <Link href={`${to}/${post.postId}`} className={styles.prevPost}>
      <span className={styles.border}>이전</span>
      <h2>{post.title}</h2>
    </Link>
  )
}

function NextPostLink({
  post,
  to,
}: {
  post: PostNavigationItem
  to: string
}) {
  if (!post) {
    return <div className={styles.nextPost}>다음 글이 없습니다.</div>
  }

  return (
    <Link href={`${to}/${post.postId}`} className={styles.nextPost}>
      <span className={styles.border}>다음</span>
      <h2>{post.title}</h2>
    </Link>
  )
}

function ListButton({ to }: { to: string }) {
  return (
    <Button size="sm" color="black" className={styles.goToListButton}>
      <ArrowLeft size={'1rem'} />
      <Link href={to}>목록으로</Link>
    </Button>
  )
}

Board.Header = BoardHeader
Board.Content = BoardContent
Board.Footer = BoardFooter

export { Board }
