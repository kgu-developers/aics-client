import { ChevronDown, Menu, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@aics-client/design-system/utils';

import { PATH, PATHMAP } from '~/constants/path';

import * as styles from '~/components/shared/site-header/mobile-nav.css';

function MobileNav({ isLoggedIn }: { isLoggedIn: boolean }) {
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
        size={24}
        className={styles.menuButton}
        onClick={() => setIsOpen(true)}
      />

      <div
        className={cn(styles.overlay, isOpen && styles.overlayVisible)}
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(false);
          }
        }}
        tabIndex={0}
        role="button"
      />
      <div className={cn(styles.drawer, isOpen && styles.drawerOpen)}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <XIcon size={24} />
        </button>
        <nav>
          {Object.entries(PATHMAP).map(([key, path]) => {
            if (path.path === PATH.MY && !isLoggedIn) {
              return null;
            }
            return (
              <div key={key} className={styles.navGroup}>
                {'children' in path ? (
                  <>
                    <button
                      type="button"
                      className={styles.navGroupTitle}
                      onClick={() => toggleGroup(key)}
                    >
                      {path.title}
                      <ChevronDown
                        size={16}
                        className={cn(
                          styles.chevron,
                          openGroups[key] && styles.chevronOpen,
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        styles.navGroupLinks,
                        openGroups[key] && styles.navGroupLinksOpen,
                      )}
                    >
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
                  </>
                ) : (
                  <Link href={path.path} className={styles.navGroupTitle}>
                    {path.title}
                  </Link>
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
