import { del } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export const removeGraduationUser = async (graduationUserId: number) => {
  const response = await del<void>({
    request: END_POINT.ADMIN.GRADUATION_USER(graduationUserId),
  });

  return response.data;
};
