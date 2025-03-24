import clsx from 'clsx';
import { ChevronDown, Menu, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { PATH, PATHMAP } from '~/constants/path';

import * as styles from '~/components/shared/site-header/mobile-nav.css';

function MobileNav({ isLogin }: { isLogin: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Menu
        size={32}
        className={styles.menuButton}
        onClick={() => setIsOpen(true)}
      />

      <div
        className={clsx(styles.overlay, isOpen && styles.overlayVisible)}
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(false);
          }
        }}
        tabIndex={0}
        role="button"
      />
      <div className={clsx(styles.drawer, isOpen && styles.drawerOpen)}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <XIcon size={24} />
        </button>
        <nav>
          {Object.entries(PATHMAP).map(([key, path]) => {
            if (path.path === PATH.MY && !isLogin) {
              return null;
            }
            return (
              <div key={key} className={styles.navGroup}>
                {'children' in path ? (
                  <button
                    type="button"
                    className={styles.navGroupTitle}
                    onClick={() => toggleGroup(key)}
                  >
                    {path.title}
                    <ChevronDown
                      size={16}
                      className={clsx(
                        styles.chevron,
                        openGroups[key] && styles.chevronOpen,
                      )}
                    />
                  </button>
                ) : (
                  <Link href={path.path} className={styles.navGroupTitle}>
                    {path.title}
                  </Link>
                )}
                {'children' in path && openGroups[key] && (
                  <div className={styles.navGroupLinks}>
                    {Object.values(path.children).map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className={styles.navGroupLink}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export { MobileNav };
