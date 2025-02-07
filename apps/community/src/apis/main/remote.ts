import { END_POINT } from '~/constants/api';
import type { BaseResponse } from '~/types/api';
import { http } from '~/utils/http';

export interface Carousel {
  id: number;
  text: string;
  link: string;
  file: {
    id: number;
    physicalPath: string;
  };
}

export interface Post {
  postId: number;
  category: string;
  title: string;
  author: string;
  description: string;
  views: number;
  hasAttachment: boolean;
  isPinned: boolean;
  createAt: string;
}

const getHero = async () => {
  const { contents } = await http.get<BaseResponse<Carousel[]>>(
    END_POINT.CAROUSEL,
  );

  return contents;
};

const getRecentNews = async (): Promise<Post[]> => {
  const params = new URLSearchParams({
    page: '0',
    size: '10',
    category: 'NEWS',
  });

  const { contents } = await http.get<BaseResponse<Post[]>>(
    `${END_POINT.POST}?${params.toString()}`,
  );

  return contents;
};

const getRecentNotices = async () => {
  const params = new URLSearchParams({
    page: '0',
    size: '3',
    category: 'NOTIFICATION',
  });

  const { contents } = await http.get<BaseResponse<Post[]>>(
    `${END_POINT.POST}?${params.toString()}`,
  );

  return contents;
};

export { getHero, getRecentNews, getRecentNotices };
