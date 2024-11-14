import * as styles from '~/components/page-header.css';

interface Props {
  title: string;
  description: string;
}

function PageHeader({ title, description }: Props) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export { PageHeader };
