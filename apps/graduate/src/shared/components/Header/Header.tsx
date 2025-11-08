import * as s from './Header.css';

type Props = {
  title: string;
  className?: string;
  subtitle?: string;
};

export default function Header({
  title,
  subtitle = '관리자 모드',
  className,
}: Props) {
  return (
    <div className={`${s.headerWrap} ${className ?? ''}`}>
      <div className={s.adminMark}>{subtitle}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
}
