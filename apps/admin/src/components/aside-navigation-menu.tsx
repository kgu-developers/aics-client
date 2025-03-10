import { Link } from '@tanstack/react-router';
import { Menu, type MenuProps } from 'antd';
import {
  Clipboard,
  FlaskConical,
  GraduationCap,
  Speech,
  Users,
} from 'lucide-react';

import LOGO from '~/assets/logo.svg';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  //TODO: Link 내부 url 변경
  {
    key: 'user',
    label: '회원 관리',
    icon: <Users size={20} />,
  },
  {
    key: 'about',
    label: '소개',
    icon: <GraduationCap size={20} />,
    children: [
      { key: 'dept', label: <Link to="/">학부 소개</Link> },
      { key: 'club', label: <Link to="/">동아리 소개</Link> },
      { key: 'contact', label: <Link to="/">찾아오시는 길</Link> },
    ],
  },
  {
    key: 'professor',
    label: <Link to="/">교수진 소개</Link>,
    icon: <Speech size={20} />,
  },
  {
    key: 'lab',
    label: <Link to="/">연구실 소개</Link>,
    icon: <FlaskConical size={20} />,
  },
  {
    key: 'board',
    label: '게시판',
    icon: <Clipboard size={20} />,
    children: [
      { key: 'notice', label: <Link to="/">공지사항</Link> },
      { key: 'news', label: <Link to="/">학부 소식</Link> },
    ],
  },
];

function AsideHeader() {
  return (
    <div className="flex items-center justify-center h-20 gap-2 font-bold border-r border-gray-300">
      <img src={LOGO} alt="logo" />
      <div className="leading-4.5">
        <p>AI컴퓨터공학부</p>
        <p>관리자 시스템</p>
      </div>
    </div>
  );
}

function AsideFooter() {
  //TODO: 로그아웃 기능 적용
  return (
    <div className="flex items-center p-2 border-r border-gray-300 place-self-end">
      <button
        type="button"
        className="p-2 text-xs transition-colors duration-150 rounded-md cursor-pointer hover:bg-gray-300"
      >
        로그아웃
      </button>
    </div>
  );
}

export default function AsideNavigationMenu() {
  return (
    <aside className="flex flex-col h-full select-none bg-slate-200 w-80">
      <AsideHeader />
      <Menu mode="inline" items={items} className="flex-grow" />
      <AsideFooter />
    </aside>
  );
}
