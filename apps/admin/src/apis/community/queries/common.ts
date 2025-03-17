// generated with @7nohe/openapi-react-query-codegen@1.6.2

import type { UseQueryResult } from '@tanstack/react-query';
import type {
  AboutService,
  CarouselService,
  ClubService,
  CommentService,
  LabService,
  PostService,
  ProfessorService,
  UserService,
} from '../requests/services.gen';
export type UserServiceGetApiV1UsersMyDefaultResponse = Awaited<
  ReturnType<typeof UserService.getApiV1UsersMy>
>;
export type UserServiceGetApiV1UsersMyQueryResult<
  TData = UserServiceGetApiV1UsersMyDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useUserServiceGetApiV1UsersMyKey = 'UserServiceGetApiV1UsersMy';
export const UseUserServiceGetApiV1UsersMyKeyFn = (
  queryKey?: Array<unknown>,
) => [useUserServiceGetApiV1UsersMyKey, ...(queryKey ?? [])];
export type CommentServiceGetApiV1CommentsDefaultResponse = Awaited<
  ReturnType<typeof CommentService.getApiV1Comments>
>;
export type CommentServiceGetApiV1CommentsQueryResult<
  TData = CommentServiceGetApiV1CommentsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useCommentServiceGetApiV1CommentsKey =
  'CommentServiceGetApiV1Comments';
export const UseCommentServiceGetApiV1CommentsKeyFn = (
  {
    postId,
  }: {
    postId: number;
  },
  queryKey?: Array<unknown>,
) => [useCommentServiceGetApiV1CommentsKey, ...(queryKey ?? [{ postId }])];
export type ProfessorServiceGetApiV1ProfessorsDefaultResponse = Awaited<
  ReturnType<typeof ProfessorService.getApiV1Professors>
>;
export type ProfessorServiceGetApiV1ProfessorsQueryResult<
  TData = ProfessorServiceGetApiV1ProfessorsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useProfessorServiceGetApiV1ProfessorsKey =
  'ProfessorServiceGetApiV1Professors';
export const UseProfessorServiceGetApiV1ProfessorsKeyFn = (
  queryKey?: Array<unknown>,
) => [useProfessorServiceGetApiV1ProfessorsKey, ...(queryKey ?? [])];
export type PostServiceGetApiV1PostsDefaultResponse = Awaited<
  ReturnType<typeof PostService.getApiV1Posts>
>;
export type PostServiceGetApiV1PostsQueryResult<
  TData = PostServiceGetApiV1PostsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const usePostServiceGetApiV1PostsKey = 'PostServiceGetApiV1Posts';
export const UsePostServiceGetApiV1PostsKeyFn = (
  {
    category,
    keywords,
    page,
    size,
  }: {
    category?: 'NOTIFICATION' | 'NEWS';
    keywords?: string[];
    page: number;
    size: number;
  },
  queryKey?: Array<unknown>,
) => [
  usePostServiceGetApiV1PostsKey,
  ...(queryKey ?? [{ category, keywords, page, size }]),
];
export type PostServiceGetApiV1PostsByPostIdDefaultResponse = Awaited<
  ReturnType<typeof PostService.getApiV1PostsByPostId>
>;
export type PostServiceGetApiV1PostsByPostIdQueryResult<
  TData = PostServiceGetApiV1PostsByPostIdDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const usePostServiceGetApiV1PostsByPostIdKey =
  'PostServiceGetApiV1PostsByPostId';
export const UsePostServiceGetApiV1PostsByPostIdKeyFn = (
  {
    postId,
  }: {
    postId: number;
  },
  queryKey?: Array<unknown>,
) => [usePostServiceGetApiV1PostsByPostIdKey, ...(queryKey ?? [{ postId }])];
export type LabServiceGetApiV1LabsDefaultResponse = Awaited<
  ReturnType<typeof LabService.getApiV1Labs>
>;
export type LabServiceGetApiV1LabsQueryResult<
  TData = LabServiceGetApiV1LabsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLabServiceGetApiV1LabsKey = 'LabServiceGetApiV1Labs';
export const UseLabServiceGetApiV1LabsKeyFn = (queryKey?: Array<unknown>) => [
  useLabServiceGetApiV1LabsKey,
  ...(queryKey ?? []),
];
export type ClubServiceGetApiV1ClubsDefaultResponse = Awaited<
  ReturnType<typeof ClubService.getApiV1Clubs>
>;
export type ClubServiceGetApiV1ClubsQueryResult<
  TData = ClubServiceGetApiV1ClubsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useClubServiceGetApiV1ClubsKey = 'ClubServiceGetApiV1Clubs';
export const UseClubServiceGetApiV1ClubsKeyFn = (queryKey?: Array<unknown>) => [
  useClubServiceGetApiV1ClubsKey,
  ...(queryKey ?? []),
];
export type CarouselServiceGetApiV1CarouselsDefaultResponse = Awaited<
  ReturnType<typeof CarouselService.getApiV1Carousels>
>;
export type CarouselServiceGetApiV1CarouselsQueryResult<
  TData = CarouselServiceGetApiV1CarouselsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useCarouselServiceGetApiV1CarouselsKey =
  'CarouselServiceGetApiV1Carousels';
export const UseCarouselServiceGetApiV1CarouselsKeyFn = (
  queryKey?: Array<unknown>,
) => [useCarouselServiceGetApiV1CarouselsKey, ...(queryKey ?? [])];
export type AboutServiceGetApiV1AboutsDefaultResponse = Awaited<
  ReturnType<typeof AboutService.getApiV1Abouts>
>;
export type AboutServiceGetApiV1AboutsQueryResult<
  TData = AboutServiceGetApiV1AboutsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAboutServiceGetApiV1AboutsKey = 'AboutServiceGetApiV1Abouts';
export const UseAboutServiceGetApiV1AboutsKeyFn = (
  {
    category,
  }: {
    category: 'DEPT_INTRO' | 'DIRECTIONS';
  },
  queryKey?: Array<unknown>,
) => [useAboutServiceGetApiV1AboutsKey, ...(queryKey ?? [{ category }])];
export type UserServicePostApiV1UsersSignupMutationResult = Awaited<
  ReturnType<typeof UserService.postApiV1UsersSignup>
>;
export type CommentServicePostApiV1CommentsMutationResult = Awaited<
  ReturnType<typeof CommentService.postApiV1Comments>
>;
export type UserServicePatchApiV1UsersMutationResult = Awaited<
  ReturnType<typeof UserService.patchApiV1Users>
>;
export type UserServicePatchApiV1UsersPasswordMutationResult = Awaited<
  ReturnType<typeof UserService.patchApiV1UsersPassword>
>;
export type UserServicePatchApiV1UsersDeleteMutationResult = Awaited<
  ReturnType<typeof UserService.patchApiV1UsersDelete>
>;
export type CommentServicePatchApiV1CommentsByCommentIdMutationResult = Awaited<
  ReturnType<typeof CommentService.patchApiV1CommentsByCommentId>
>;
export type CommentServicePatchApiV1CommentsByCommentIdDeleteMutationResult =
  Awaited<
    ReturnType<typeof CommentService.patchApiV1CommentsByCommentIdDelete>
  >;
