import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '연구실 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 AI컴퓨터공학부의 다양한 연구실을 소개해요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
