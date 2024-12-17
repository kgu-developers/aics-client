import * as styles from '~/components/lab/lab-list.css';

interface Props {
  children: React.ReactNode;
}

function LabList({ children }: Props) {
  return <div className={styles.labList}>{children}</div>;
}

export { LabList };
