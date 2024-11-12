import * as styles from '~/components/site-footer.css';

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>footer navigations</div>
      <div className={styles.footerCopy}>
        <small>
          <span>&copy; </span>
          <time dateTime={new Date().getFullYear().toString()}>
            {new Date().getFullYear()}
          </time>
          <span> KGU Developers . All rights reserved.</span>
        </small>
      </div>
    </footer>
  );
}

export { SiteFooter };
