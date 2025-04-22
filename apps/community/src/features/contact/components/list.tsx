import * as styles from '~/components/about/list.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

/* 추후 삭제되어야 할 컴포넌트입니다 */
function List({ title, children }: Props) {
  return (
    <div>
      <h3 className={styles.listTitle}>{title}</h3>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

List.Row = Row;

export { List };
