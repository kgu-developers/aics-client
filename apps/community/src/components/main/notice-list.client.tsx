'use client';

import dynamic from 'next/dynamic';

// 클라이언트 전용 dynamic import
const NoticeList = dynamic(() => import('./notice-list'), {
  ssr: false,
});

export default NoticeList;
