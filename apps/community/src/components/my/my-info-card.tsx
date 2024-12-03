import * as style from '~/components/my/my-info-card.css';

interface Props {
  children: React.ReactNode;
}

function MyInfoCard({ children }: Props) {
  return (
    <div className={style.cardWrapper}>
      <h2 className={style.cardTitle}>내 프로필</h2>
      <div className={style.cardContent}>{children}</div>
    </div>
  );
}

export { MyInfoCard };
