export const formatExpireTime = (times: number | null) => {
  if (times === null || times <= 0) return null;

  const totalSeconds = Math.floor(times / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export const extractFileName = (path: string) => {
  return path.split('/').pop();
};

export const convertCategory = (category: string) => {
  const categoryMap: Record<string, 'NEWS' | 'NOTIFICATION'> = {
    공지사항: 'NEWS',
    '학과 소식': 'NOTIFICATION',
  };

  return categoryMap[category];
};
