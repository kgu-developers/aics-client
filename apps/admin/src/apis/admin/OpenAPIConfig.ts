// src/apis/admin/OpenAPIConfig.ts
import { OpenAPI } from '~/apis/admin/requests/core/OpenAPI';
OpenAPI.HEADERS = {
  Authorization: `Bearer ${localStorage.getItem('accessToken') ?? ''}`,
};
