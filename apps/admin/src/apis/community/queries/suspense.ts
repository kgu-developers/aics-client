// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import {
  AboutService,
  CarouselService,
  ClubService,
  CommentService,
  LabService,
  PostService,
  ProfessorService,
  UserService,
} from '../requests/services.gen';
import * as Common from './common';
export const useUserServiceGetApiV1UsersMySuspense = <
  TData = Common.UserServiceGetApiV1UsersMyDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseUserServiceGetApiV1UsersMyKeyFn(queryKey),
    queryFn: () => UserService.getApiV1UsersMy() as TData,
    ...options,
  });
export const useCommentServiceGetApiV1CommentsSuspense = <
  TData = Common.CommentServiceGetApiV1CommentsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    postId,
  }: {
    postId: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseCommentServiceGetApiV1CommentsKeyFn(
      { postId },
      queryKey,
    ),
    queryFn: () => CommentService.getApiV1Comments({ postId }) as TData,
    ...options,
  });
export const useProfessorServiceGetApiV1ProfessorsSuspense = <
  TData = Common.ProfessorServiceGetApiV1ProfessorsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseProfessorServiceGetApiV1ProfessorsKeyFn(queryKey),
    queryFn: () => ProfessorService.getApiV1Professors() as TData,
    ...options,
  });
export const usePostServiceGetApiV1PostsSuspense = <
  TData = Common.PostServiceGetApiV1PostsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
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
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UsePostServiceGetApiV1PostsKeyFn(
      { category, keywords, page, size },
      queryKey,
    ),
    queryFn: () =>
      PostService.getApiV1Posts({ category, keywords, page, size }) as TData,
    ...options,
  });
export const usePostServiceGetApiV1PostsByPostIdSuspense = <
  TData = Common.PostServiceGetApiV1PostsByPostIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    postId,
  }: {
    postId: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UsePostServiceGetApiV1PostsByPostIdKeyFn(
      { postId },
      queryKey,
    ),
    queryFn: () => PostService.getApiV1PostsByPostId({ postId }) as TData,
    ...options,
  });
export const useLabServiceGetApiV1LabsSuspense = <
  TData = Common.LabServiceGetApiV1LabsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseLabServiceGetApiV1LabsKeyFn(queryKey),
    queryFn: () => LabService.getApiV1Labs() as TData,
    ...options,
  });
export const useClubServiceGetApiV1ClubsSuspense = <
  TData = Common.ClubServiceGetApiV1ClubsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseClubServiceGetApiV1ClubsKeyFn(queryKey),
    queryFn: () => ClubService.getApiV1Clubs() as TData,
    ...options,
  });
export const useCarouselServiceGetApiV1CarouselsSuspense = <
  TData = Common.CarouselServiceGetApiV1CarouselsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseCarouselServiceGetApiV1CarouselsKeyFn(queryKey),
    queryFn: () => CarouselService.getApiV1Carousels() as TData,
    ...options,
  });
export const useAboutServiceGetApiV1AboutsSuspense = <
  TData = Common.AboutServiceGetApiV1AboutsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    category,
  }: {
    category: 'DEPT_INTRO' | 'DIRECTIONS';
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseAboutServiceGetApiV1AboutsKeyFn({ category }, queryKey),
    queryFn: () => AboutService.getApiV1Abouts({ category }) as TData,
    ...options,
  });
