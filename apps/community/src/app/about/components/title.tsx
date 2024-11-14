import * as styles from '~/app/about/components/title.css';

interface Props {
  title: string;
  description: string;
}

const Title = ({ title, description }: Props) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export { Title };
