import * as styles from '~/components/site-footer.css';

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>footer navigations</div>
      <div>
        <p className={styles.footerCopy}>
          &copy;{new Date().getFullYear()} KGU Developers . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { SiteFooter };
