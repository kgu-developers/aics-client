import { MOCK_END_POINT } from '~/constants/api';
import type { Club } from '~/types/club';
import { http } from '~/utils/http';

class ClubService {
  getClubs() {
    return http.get<Club[]>(MOCK_END_POINT.CLUB);
  }
}

export default new ClubService();
