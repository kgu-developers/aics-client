'use client';

import dynamic from 'next/dynamic';

const NoticeList = dynamic(() => import('./notice-list'), {
  ssr: false,
});

export default NoticeList;
