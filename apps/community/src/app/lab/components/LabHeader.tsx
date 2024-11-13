import * as styles from './LabHeader.css';

function LabHeader() {
  return (
    <>
      <h2 className={styles.title}>연구실 목록</h2>
      <p className={styles.description}>
        경기대학교 AI컴퓨터공학부의 다양한 연구실을 소개해요.
      </p>
    </>
  );
}

export { LabHeader };
