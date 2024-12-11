import Link from 'next/link';

import { Button } from '@aics-client/design-system';
import {
  ArrowLeft,
  Calendar,
  Download,
  Eye,
} from '@aics-client/design-system/icons';

import * as styles from '~/components/board/board.css';

interface HeaderProps {
  title: string;
  author: string;
  views: number;
  createdAt: string;
  file?: {
    logicalName: string;
    physicalPath: string;
  };
}

function Board({ children }: { children: React.ReactNode }) {
  return <article>{children}</article>;
}

function Header({ title, author, views, createdAt, file }: HeaderProps) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.informationWrapper}>
        <div>{author}</div>
        <div className={styles.flex}>
          <div className={styles.views}>
            <Eye size={'0.875rem'} />
            <span>{views}</span>
          </div>
          <div className={styles.createdAt}>
            <Calendar size={'0.875rem'} />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
      {file && (
        <button type="button" className={styles.file}>
          <Download size={'0.875rem'} />
          <span>{file.logicalName}</span>
        </button>
      )}
    </div>
  );
}

function Content({ content }: { content: string }) {
  return <div className={styles.content}>{content}</div>;
}

interface FooterProps {
  prevPost: {
    id: number;
    title: string;
  };
  nextPost: {
    id: number;
    title: string;
  };
  to: string;
}

function Footer({ prevPost, nextPost, to }: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className={styles.postItems}>
        {prevPost ? (
          <Link href={`${to}/${prevPost.id}`} className={styles.prevPost}>
            <span className={styles.border}>이전</span>
            <h2> {prevPost.title}</h2>
          </Link>
        ) : (
          <div className={styles.noPost}>이전 글이 없습니다</div>
        )}
        {nextPost ? (
          <Link href={`${to}/${nextPost.id}`} className={styles.nextPost}>
            <span className={styles.border}>다음</span>
            <h2>{nextPost.title}</h2>
          </Link>
        ) : (
          <div className={styles.noPost}>다음 글이 없습니다.</div>
        )}
      </div>

      <Button size="sm" color="black" className={styles.goToListButton}>
        <ArrowLeft size={'1rem'} />
        <Link href={to}>목록으로</Link>
      </Button>
    </div>
  );
}

Board.Header = Header;
Board.Content = Content;
Board.Footer = Footer;

export { Board };
