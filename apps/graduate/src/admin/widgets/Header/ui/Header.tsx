import { Link } from '@tanstack/react-router';
import { Avatar, Dropdown, MenuProps } from 'antd';
import { User } from 'lucide-react';

import { logout } from '~/shared/utils';

import * as styles from '../styles/Header.css';

export default function Header() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target='_blank' rel='noopener noreferrer' onClick={logout}>
          로그아웃
        </a>
      ),
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to='/'>
          <img src='/logo.png' alt='logo' className={styles.logo} />
        </Link>
        <span className={styles.title}>
          컴퓨터공학전공 졸업 요건 취득 서비스
        </span>
      </div>
      <Dropdown menu={{ items }} placement='bottomRight'>
        <Avatar size={32} icon={<User />} style={{ cursor: 'pointer' }} />
      </Dropdown>
    </header>
  );
}
