import { Link } from '@tanstack/react-router';

import { useLogout } from '~/shared/hooks';

import * as style from './Sidebar.css';
import { adminMenuSections } from '../model/model';

import { AuthContext } from '~/routes/__root';

export default function Sidebar({ auth }: AuthContext) {
  const handleLogout = useLogout(auth);

  return (
    <aside className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <img src='/kguLogo.svg' alt='로고' className={style.logoImage} />
        <a
          className={style.logout}
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleLogout}
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
