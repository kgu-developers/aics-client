import type {
  AboutCreateRequest,
  AboutUpdateRequest,
  PostApiV1AboutsData,
  PatchApiV1AboutsByIdData,
} from '~/apis/admin/requests/types.gen';
import type * as Community from '~/apis/community/queries/common';

export type DirectionsCategory = AboutCreateRequest['category']; // 'DEPT_INTRO' | 'DIRECTIONS'

export type DirectionsCreateBody = AboutCreateRequest; // { category, content }
export type DirectionsUpdateBody = AboutUpdateRequest; // { content }

export type DirectionsCreateData = PostApiV1AboutsData; // { requestBody: AboutCreateRequest }
export type DirectionsUpdateData = PatchApiV1AboutsByIdData; // { category, requestBody: AboutUpdateRequest }

export type DirectionsGetResponse =
  Community.AboutServiceGetApiV1AboutsDefaultResponse;
export type DirectionsContent = DirectionsGetResponse['content'];

export type {
  AboutCreateRequest,
  AboutUpdateRequest,
  PostApiV1AboutsData,
  PatchApiV1AboutsByIdData,
} from '~/apis/admin/requests/types.gen';
