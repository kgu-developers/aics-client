import * as styles from '~/components/page-header.css';

interface Props {
  title: string;
  description: string;
}

function PageHeader({ title, description }: Props) {
  return (
    <div className={styles.pageHeaderWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export { PageHeader };
