import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

const getHeroImages = () => {
  return http.get(MOCK_END_POINT.HEROES);
};

const getRecentNews = () => {
  return http.get(MOCK_END_POINT.RECENT_NEWS);
};

const getRecentNotices = () => {
  return http.get(MOCK_END_POINT.RECENT_NOTICES);
};

export { getHeroImages, getRecentNews, getRecentNotices };
