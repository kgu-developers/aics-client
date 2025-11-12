import { cn } from '@aics-client/design-system/utils';
import { ChevronDown, Menu, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';



import * as styles from '~/shared/components/site-header/mobile-nav.css';
import { PATH, PATHMAP } from '~/shared/constants/path';

interface MobileNavProps {
  isLoggedIn: boolean;
}

function MobileNav({ isLoggedIn }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleGroup = (key: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeDrawer = () => setIsOpen(false);

  const renderNavGroups = () =>
    Object.entries(PATHMAP).map(([key, path]) => {
      if (path.path === PATH.MY && !isLoggedIn) {
        return null;
      }

      const hasChildren = 'children' in path;

      return (
        <div key={key} className={styles.navGroup}>
          {hasChildren ? (
            <>
              <button
                type='button'
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
                id={`group-${key}`}
                className={cn(
                  styles.navGroupLinks,
                  openGroups[key] && styles.navGroupLinksOpen,
                )}
              >
                {Object.values(path.children).map(child => (
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
    });

  return (
    <>
      <Menu
        size={24}
        className={styles.menuButton}
        onClick={() => setIsOpen(true)}
      />

      <div
        className={cn(styles.overlay, isOpen && styles.overlayVisible)}
        onClick={closeDrawer}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            closeDrawer();
          }
        }}
        tabIndex={0}
        role='button'
      />
      <div className={cn(styles.drawer, isOpen && styles.drawerOpen)}>
        <button
          type='button'
          className={styles.closeButton}
          onClick={closeDrawer}
        >
          <XIcon size={24} />
        </button>
        <nav>{renderNavGroups()}</nav>
      </div>
    </>
  );
}

export { MobileNav };
