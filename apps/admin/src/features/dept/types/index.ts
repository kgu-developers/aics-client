import type {
  AboutCreateRequest,
  AboutUpdateRequest,
  PostApiV1AboutsData,
  PatchApiV1AboutsByIdData,
} from '~/apis/admin/requests/types.gen';
import type * as Community from '~/apis/community/queries/common';
export type AboutCategory = AboutCreateRequest['category'];

export type DeptIntroCreateBody = AboutCreateRequest; // { category, content }
export type DeptIntroUpdateBody = AboutUpdateRequest; // { content }

export type DeptIntroCreateData = PostApiV1AboutsData; // { requestBody: AboutCreateRequest }
export type DeptIntroUpdateData = PatchApiV1AboutsByIdData; // { category, requestBody: AboutUpdateRequest }
export type DeptIntroGetResponse =
  Community.AboutServiceGetApiV1AboutsDefaultResponse;
export type DeptIntroContent = DeptIntroGetResponse['content']; // string | null

export type {
  AboutCreateRequest,
  AboutUpdateRequest,
  PostApiV1AboutsData,
  PatchApiV1AboutsByIdData,
} from '~/apis/admin/requests/types.gen';
