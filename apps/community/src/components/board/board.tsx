import Link from 'next/link';

import { Button } from '@aics-client/design-system';
import { Calendar, Download, Eye } from '@aics-client/design-system/icons';

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

function Footer({ to }: { to: string }) {
  return (
    <div className={styles.footer}>
      <Button size="sm" color="black">
        <Link href={to}>목록</Link>
      </Button>
    </div>
  );
}

Board.Header = Header;
Board.Content = Content;
Board.Footer = Footer;

export { Board };
