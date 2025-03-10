import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '학부 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 AI컴퓨터공학부를 소개해요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
