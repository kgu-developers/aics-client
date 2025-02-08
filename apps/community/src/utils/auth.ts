import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { accessTokenAtom } from '~/atoms/tokenAtom';
import { END_POINT } from '~/constants/api';
import type { Tokens } from '~/hooks/use-sign-in';
import { http } from '~/utils/http';

const JWT_EXPIRY_TIME = 1800 * 1000 - 60 * 1000; // 29분

interface RefreshToken {
  refreshToken: string | null;
}

const useAuth = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);

  const silentRefresh = useMutation({
    mutationFn: async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      return await http.post<RefreshToken, Tokens>(END_POINT.REISSUE, {
        refreshToken,
      });
    },
    onSuccess: (tokens) => {
      setTokens(tokens);
    },
    onError: () => {
      alert('세션이 만료되어 로그아웃합니다.');
      logout();
    },
  });

  const setTokens = (tokens: Tokens) => {
    setAccessToken(tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);

    setTimeout(() => {
      silentRefresh.mutate();
    }, JWT_EXPIRY_TIME);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('refreshToken');
  };

  return { setTokens, logout };
};

export { useAuth };
