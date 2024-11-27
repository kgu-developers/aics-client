import * as style from './club-list.css';

interface Props {
  children: React.ReactNode;
}

function ClubList({ children }: Props) {
  return <div className={style.clubList}>{children}</div>;
}

export { ClubList };
