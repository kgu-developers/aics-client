import axios, {
  AxiosInstance,
  type AxiosRequestConfig,
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
  responseType?: AxiosRequestConfig['responseType'];
}

interface MutationRequestConfig<
  TData = unknown,
  TParams = unknown,
> extends BaseRequestConfig {
  data?: TData;
  params?: TParams;
}

interface DeleteRequestConfig<TData = unknown> extends BaseRequestConfig {
  data?: TData;
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
}

const userInstance = axios.create({
  baseURL: API_URL,
});

const adminInstance = axios.create({
  baseURL: API_ADMIN_URL,
});

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

function selectInstanceByRequest(request: EndpointPath): AxiosInstance {
  if (request.startsWith('/api/v1/auth/')) {
    return authInstance;
  }

  if (request.startsWith('/api/v1/admin/')) {
    return adminInstance;
  }

  return userInstance;
}

function createHttpMethods(instance: AxiosInstance) {
  return {
    async get<TResponse = unknown, TParams = unknown>(
      config: GetRequestConfig<TParams>,
    ): Promise<AxiosResponse<TResponse>> {
      const { request, headers, params, responseType } = config;
      try {
        const response = await instance.get<TResponse>(request, {
          params,
          headers,
          responseType,
        });
        return response;
      } catch (error: unknown) {
        handleAxiosError(error);
      }
    },

    async post<TResponse = unknown, TData = unknown, TParams = unknown>(
      config: MutationRequestConfig<TData, TParams>,
    ): Promise<AxiosResponse<TResponse>> {
      const { request, data, headers, params } = config;
      try {
        const response = await instance.post<
          TResponse,
          AxiosResponse<TResponse>,
          TData
        >(request, data, {
          headers,
          params,
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

    async del<TResponse = unknown, TData = unknown>(
      config: DeleteRequestConfig<TData>,
    ): Promise<AxiosResponse<TResponse>> {
      const { request, data, headers } = config;
      try {
        const response = await instance.delete<
          TResponse,
          AxiosResponse<TResponse>
        >(request, {
          data,
          headers,
        });
        return response;
      } catch (error: unknown) {
        handleAxiosError(error);
      }
    },

    async patch<TResponse = unknown, TData = unknown, TParams = unknown>(
      config: MutationRequestConfig<TData, TParams>,
    ): Promise<AxiosResponse<TResponse>> {
      const { request, data, headers, params } = config;
      try {
        const response = await instance.patch<
          TResponse,
          AxiosResponse<TResponse>,
          TData
        >(request, data, {
          headers,
          params,
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
  const { request, headers, params, responseType } = config;
  try {
    const response = await instance.get<TResponse>(request, {
      params,
      headers,
      responseType,
    });
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}

async function post<TResponse = unknown, TData = unknown, TParams = unknown>(
  config: MutationRequestConfig<TData, TParams>,
): Promise<AxiosResponse<TResponse>> {
  const instance = selectInstanceByRequest(config.request);
  const { request, data, headers, params } = config;
  try {
    const response = await instance.post<
      TResponse,
      AxiosResponse<TResponse>,
      TData
    >(request, data, {
      headers,
      params,
    });
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}

async function del<TResponse = unknown, TData = unknown>(
  config: DeleteRequestConfig<TData>,
): Promise<AxiosResponse<TResponse>> {
  const instance = selectInstanceByRequest(config.request);
  const { request, data, headers } = config;
  try {
    const response = await instance.delete<TResponse, AxiosResponse<TResponse>>(
      request,
      {
        data,
        headers,
      },
    );
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}

async function patch<TResponse = unknown, TData = unknown, TParams = unknown>(
  config: MutationRequestConfig<TData, TParams>,
): Promise<AxiosResponse<TResponse>> {
  const instance = selectInstanceByRequest(config.request);
  const { request, data, headers, params } = config;
  try {
    const response = await instance.patch<
      TResponse,
      AxiosResponse<TResponse>,
      TData
    >(request, data, {
      headers,
      params,
    });
    return response;
  } catch (error: unknown) {
    handleAxiosError(error);
  }
}

export { get, post, del, patch };
