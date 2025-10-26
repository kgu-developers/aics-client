import * as s from './Header.css'

type Props = {
  title: string
  className?: string
}

export default function Header({ title, className }: Props) {
  return (
    <div className={`${s.headerWrap} ${className ?? ''}`}>
      <div className={s.adminMark}>관리자 모드</div>
      <div className={s.title}>{title}</div>
    </div>
  )
}
