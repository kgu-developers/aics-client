import * as styles from '~/components/my/my-info-field.css';

interface Props {
  title: string;
  value: React.ReactNode;
}

function MyInfoField({ title, value }: Props) {
  return (
    <div>
      <h3 className={styles.listTitle}>{title}</h3>
      <ul className={styles.list}>
        <li>{value}</li>
      </ul>
    </div>
  );
}

export { MyInfoField };
