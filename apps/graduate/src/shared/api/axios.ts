import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { END_POINT, ENV_API_URL } from '~/shared/constants';
import { parseError, logout } from '~/shared/utils';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '~/shared/utils';

interface BaseRequestConfig {
  request: string;
  headers?: Record<string, string>;
}

interface GetRequestConfig<TParams = unknown> extends BaseRequestConfig {
  params?: TParams;
}

interface MutationRequestConfig<TData = unknown> extends BaseRequestConfig {
  data?: TData;
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
}

const instance = axios.create({
  baseURL: ENV_API_URL,
});

const refreshInstance = axios.create({
  baseURL: ENV_API_URL,
});

let refreshTokenPromise: Promise<string> | null = null;

async function refreshAccessToken(): Promise<string> {
  if (refreshTokenPromise) {
    return refreshTokenPromise;
  }

  refreshTokenPromise = (async () => {
    try {
      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        throw new Error('No refresh token');
      }

      const response = await refreshInstance.post<RefreshTokenResponse>(
        END_POINT.AUTH.REFRESH,
        { refreshToken },
      );

      const { accessToken, refreshToken: newRefreshToken } = response.data;

      setAccessToken(accessToken);
      if (newRefreshToken) {
        setRefreshToken(newRefreshToken);
      }

      return accessToken;
    } catch (error) {
      logout();
      throw error;
    } finally {
      refreshTokenPromise = null;
    }
  })();

  return refreshTokenPromise;
}

function handleAxiosError(error: unknown): never {
  const errorInfo = parseError(error);
  throw new Error(errorInfo.message);
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
    const originalRequest = error.config as
      | CustomAxiosRequestConfig
      | undefined;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export async function get<TResponse = unknown, TParams = unknown>(
  config: GetRequestConfig<TParams>,
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
  config: MutationRequestConfig<TData>,
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
  config: MutationRequestConfig<TData>,
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
  config: BaseRequestConfig,
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
