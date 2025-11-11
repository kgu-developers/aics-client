import * as styles from '../styles/Header.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/kguLogo.svg" alt="logo" className={styles.logo} />
      <span className={styles.title}>컴퓨터공학전공 졸업 요건 취득 서비스</span>
    </header>
  )
}
