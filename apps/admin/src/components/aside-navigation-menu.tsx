import { Link } from '@tanstack/react-router';
import { Menu, type MenuProps } from 'antd';
import {
  Clipboard,
  Clock,
  FlaskConical,
  GraduationCap,
  ImagesIcon,
  Speech,
  Users,
} from 'lucide-react';

import LOGO from '~/assets/logo.svg';
import { PATH } from '~/constants/path';
import { useRefreshTokens } from '~/hooks/use-refresh-token';
import { useTokenExpiration } from '~/hooks/use-token-expiration';
import { authServices } from '~/utils/auth';
import { formatExpireTime } from '~/utils/utils';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'user',
    label: (
      <Link to={PATH.USER} search={{ page: 0, query: '' }}>
        사용자 관리
      </Link>
    ),
    icon: <Users size={20} />,
  },
  {
    key: 'about',
    label: '소개',
    icon: <GraduationCap size={20} />,
    children: [
      { key: 'dept', label: <Link to={PATH.DEPT}>학부 소개</Link> },
      { key: 'club', label: <Link to={PATH.CLUB}>동아리 소개</Link> },
      {
        key: 'contact',
        label: <Link to={PATH.DIRECTIONS}>찾아오시는 길</Link>,
      },
    ],
  },
  {
    key: 'professor',
    label: <Link to={PATH.PROFESSOR}>교수진 소개</Link>,
    icon: <Speech size={20} />,
  },
  {
    key: 'lab',
    label: <Link to={PATH.LAB}>연구실 소개</Link>,
    icon: <FlaskConical size={20} />,
  },
  {
    key: 'board',
    label: '게시판',
    icon: <Clipboard size={20} />,
    children: [
      {
        key: 'notice',
        label: (
          <Link to={PATH.NOTICE} search={{ page: 0, query: '' }}>
            공지사항
          </Link>
        ),
      },
      {
        key: 'news',
        label: (
          <Link to={PATH.NEWS} search={{ page: 0, query: '' }}>
            학부 소식
          </Link>
        ),
      },
    ],
  },
  {
    key: 'carousel',
    label: <Link to={PATH.HERO_IMAGES}>대표 이미지</Link>,
    icon: <ImagesIcon size={20} />,
  },
];

function AsideHeader() {
  return (
    <div className="flex items-center justify-center gap-2 font-bold border-r border-gray-200 h-22">
      <img src={LOGO} alt="logo" />
      <div className="leading-4.5">
        <p>AI컴퓨터공학부</p>
        <p>관리자 시스템</p>
      </div>
    </div>
  );
}

function AsideFooter() {
  const { expireTime } = useTokenExpiration();
  const refreshMutation = useRefreshTokens();
  const { logout } = authServices();

  const handleRefreshToken = () => {
    refreshMutation.mutate();
  };

  return (
    <div className="flex items-center justify-between p-2 text-sm border-r border-gray-200">
      <div className="flex p-2 gap-1.5 items-center">
        <Clock size={16} />
        <span>{formatExpireTime(expireTime)}</span>
      </div>
      <div>
        <button
          type="button"
          className="p-2 transition-colors duration-150 rounded-md cursor-pointer hover:bg-gray-300"
          onClick={handleRefreshToken}
        >
          시간연장
        </button>
        <button
          type="button"
          className="p-2 transition-colors duration-150 rounded-md cursor-pointer hover:bg-gray-300"
          onClick={logout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default function AsideNavigationMenu() {
  return (
    <aside className="flex flex-col h-full select-none bg-slate-100 w-80">
      <AsideHeader />
      <Menu mode="inline" items={items} className="flex-grow" />
      <AsideFooter />
    </aside>
  );
}
