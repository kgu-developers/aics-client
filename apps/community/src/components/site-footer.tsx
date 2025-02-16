import * as styles from '~/components/site-footer.css';
import { PATHMAP } from '~/constants/path';

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <div>logo</div>
        <div className={styles.navLinks}>
          {Object.values(PATHMAP).map((path) => (
            <div key={path.path} className={styles.navGroup}>
              <a href={path.path} className={styles.navGroupTitle}>
                {path.title}
              </a>
              {'children' in path && (
                <div className={styles.navGroupLinks}>
                  {Object.values(path.children).map((child) => (
                    <a
                      key={child.path}
                      href={`${path.path}${child.path}`}
                      className={styles.navGroupLink}
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
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
