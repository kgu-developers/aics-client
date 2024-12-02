import * as style from '~/components/users/user-card.css';

interface Props {
  children: React.ReactNode;
}

function UserCard({ children }: Props) {
  return (
    <div className={style.cardWrapper}>
      <h2 className={style.cardTitle}>내 프로필</h2>
      <div className={style.cardContent}>{children}</div>
    </div>
  );
}

export { UserCard };
