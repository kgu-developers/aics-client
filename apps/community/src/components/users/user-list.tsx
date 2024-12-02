import * as styles from '~/components/users/user-list.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

function UserList({ title, children }: Props) {
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

UserList.Row = Row;

export { UserList };
