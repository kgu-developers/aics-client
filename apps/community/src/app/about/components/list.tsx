import * as styles from './list.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

const List = ({ title, children }: Props) => {
  return (
    <div>
      <h3 className={styles.listTitle}>{title}</h3>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

Row.displayName = 'ListRow';

List.Row = Row;

export { List };
