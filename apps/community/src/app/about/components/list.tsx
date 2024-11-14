import * as styles from '~/app/about/components/list.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

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
