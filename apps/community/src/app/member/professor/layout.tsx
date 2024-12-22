import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '교수진 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 소프트웨어경영대학 AI컴퓨터공학부 공식 홈페이지',
};
export default function ProfessorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
