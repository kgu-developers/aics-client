import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { END_POINT } from '~/shared/constants/END_POINT';
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '~/shared/utils/token';

interface BaseRequestParams {
  request: string;
  headers?: Record<string, string>;
}

interface GetRequestParams<TParams = unknown> extends BaseRequestParams {
  params?: TParams;
}

interface MutationRequestParams<TData = unknown> extends BaseRequestParams {
  data?: TData;
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const handleLogout = (): void => {
  clearTokens();
  window.location.href = '/'; // 로그인 위치 확인 필요
};

function handleAxiosError(error: unknown): never {
  console.log(error);
  if (axios.isAxiosError(error)) {
    throw new Error(error.response?.data.message);
  }
  throw new Error('에러가 발생했습니다');
}

instance.interceptors.request.use(
  config => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();

        if (!refreshToken) {
          handleLogout();
          return Promise.reject(error);
        }

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}${END_POINT.AUTH_REFRESH}`,
          { refreshToken },
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        setAccessToken(accessToken);
        if (newRefreshToken) {
          setRefreshToken(newRefreshToken);
        }

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        handleLogout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export async function get<TResponse = unknown, TParams = unknown>(
  config: GetRequestParams<TParams>,
): Promise<AxiosResponse<TResponse>> {
  const { request, headers, params } = config;
  try {
    const response = await instance.get<TResponse>(request, {
      params,
      headers,
    });
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}

export async function post<TResponse = unknown, TData = unknown>(
  config: MutationRequestParams<TData>,
): Promise<AxiosResponse<TResponse>> {
  const { request, data, headers } = config;
  try {
    const response = await instance.post<
      TResponse,
      AxiosResponse<TResponse>,
      TData
    >(request, data, {
      headers,
    });
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}

export async function put<TResponse = unknown, TData = unknown>(
  config: MutationRequestParams<TData>,
): Promise<AxiosResponse<TResponse>> {
  const { request, data, headers } = config;
  try {
    const response = await instance.put<
      TResponse,
      AxiosResponse<TResponse>,
      TData
    >(request, data, {
      headers,
    });
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}

export async function del<TResponse = unknown>(
  config: BaseRequestParams,
): Promise<AxiosResponse<TResponse>> {
  const { request, headers } = config;
  try {
    const response = await instance.delete<TResponse, AxiosResponse<TResponse>>(
      request,
      {
        headers,
      },
    );
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}
