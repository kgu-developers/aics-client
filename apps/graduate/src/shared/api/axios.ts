import axios, {
  AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import {
  API_AUTH_URL,
  API_ADMIN_URL,
  END_POINT,
  API_URL,
  type EndpointPath,
} from '~/shared/constants';
import { parseError, logout } from '~/shared/utils';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '~/shared/utils';

interface BaseRequestConfig {
  request: EndpointPath;
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

/**
 * https://aics-api.ummdev.com/
 * 에 전송하는 사용자 API baseURL이 적용된 Instance입니다 */
const userInstance = axios.create({
  baseURL: API_URL,
});

/**
 * https://aics-admin.ummdev.com/
 * 에 전송하는 관리자 API baseURL이 적용된 Instance입니다 */
const adminInstance = axios.create({
  baseURL: API_ADMIN_URL,
});

/**
 * https://aics-auth.ummdev.com/
 * 에 전송하는 인증 API baseURL이 적용된 Instance입니다 */
const authInstance = axios.create({
  baseURL: API_AUTH_URL,
});

/**
 * 토큰 갱신용 Instance입니다.
 * reissue 엔드포인트가 속한 auth baseUrl이 적용되었습니다
 */
const refreshInstance = axios.create({
  baseURL: API_AUTH_URL,
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

function setupRequestInterceptor(instance: AxiosInstance) {
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
}

function setupResponseInterceptor(
  instance: AxiosInstance,
  retryInstance: AxiosInstance,
) {
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
          return retryInstance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
}

setupRequestInterceptor(userInstance);
setupResponseInterceptor(userInstance, refreshInstance);

setupRequestInterceptor(adminInstance);
setupResponseInterceptor(adminInstance, refreshInstance);

authInstance.interceptors.request.use(
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

function getAllEndpointPaths(
  obj: (typeof END_POINT)[keyof typeof END_POINT],
): EndpointPath[] {
  const paths: EndpointPath[] = [];
  for (const key in obj) {
    const value = obj[key as keyof typeof obj];
    if (typeof value === 'string') {
      paths.push(value as EndpointPath);
    }
  }
  return paths;
}

function selectInstanceByRequest(request: EndpointPath): AxiosInstance {
  const authPaths = getAllEndpointPaths(END_POINT.AUTH);
  if (authPaths.some(path => request === path || request.startsWith(path))) {
    return authInstance;
  }

  const adminPaths = getAllEndpointPaths(END_POINT.ADMIN);
  if (
    adminPaths.length > 0 &&
    adminPaths.some(path => request === path || request.startsWith(path))
  ) {
    return adminInstance;
  }

  return userInstance;
}

function createHttpMethods(instance: AxiosInstance) {
  return {
    async get<TResponse = unknown, TParams = unknown>(
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
    },

    async post<TResponse = unknown, TData = unknown>(
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
    },

    async put<TResponse = unknown, TData = unknown>(
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
    },

    async del<TResponse = unknown>(
      config: BaseRequestConfig,
    ): Promise<AxiosResponse<TResponse>> {
      const { request, headers } = config;
      try {
        const response = await instance.delete<
          TResponse,
          AxiosResponse<TResponse>
        >(request, {
          headers,
        });
        return response;
      } catch (error: unknown) {
        handleAxiosError(error);
      }
    },
  };
}

export const userApi = createHttpMethods(userInstance);
export const adminApi = createHttpMethods(adminInstance);
export const authApi = createHttpMethods(authInstance);

async function get<TResponse = unknown, TParams = unknown>(
  config: GetRequestConfig<TParams>,
): Promise<AxiosResponse<TResponse>> {
  const instance = selectInstanceByRequest(config.request);
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

async function post<TResponse = unknown, TData = unknown>(
  config: MutationRequestConfig<TData>,
): Promise<AxiosResponse<TResponse>> {
  const instance = selectInstanceByRequest(config.request);
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

async function put<TResponse = unknown, TData = unknown>(
  config: MutationRequestConfig<TData>,
): Promise<AxiosResponse<TResponse>> {
  const instance = selectInstanceByRequest(config.request);
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

async function del<TResponse = unknown>(
  config: BaseRequestConfig,
): Promise<AxiosResponse<TResponse>> {
  const instance = selectInstanceByRequest(config.request);
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

export { get, post, put, del };
