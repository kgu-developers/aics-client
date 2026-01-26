import { Link } from '@tanstack/react-router';

import { logout } from '~/shared/utils';

import * as style from './Sidebar.css';
import { adminMenuSections } from '../model';

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <img src='/kguLogo.svg' alt='로고' className={style.logoImage} />
        <a
          className={style.logout}
          target='_blank'
          rel='noopener noreferrer'
          onClick={logout}
        >
          로그아웃
        </a>
      </div>

      <nav className={style.sidebarMenu}>
        {adminMenuSections.map(section => (
          <div key={section.title} className={style.menuSection}>
            <div className={style.sectionTitle}>{section.title}</div>
            <div className={style.sectionItems}>
              {section.items.map(item => (
                <div key={item.to} className={style.menuItem}>
                  <Link
                    to={item.to}
                    className={style.menuLink}
                    activeProps={{ className: style.active }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
