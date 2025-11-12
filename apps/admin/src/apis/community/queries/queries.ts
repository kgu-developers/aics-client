// generated with @7nohe/openapi-react-query-codegen@1.6.2

import {
  type UseMutationOptions,
  type UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

import * as Common from './common';
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
import type {
  CommentRequest,
  CommentUpdateRequest,
  UserCreateRequest,
  UserPasswordUpdateRequest,
  UserUpdateRequest,
} from '../requests/types.gen';
export const useUserServiceGetApiV1UsersMy = <
  TData = Common.UserServiceGetApiV1UsersMyDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseUserServiceGetApiV1UsersMyKeyFn(queryKey),
    queryFn: () => UserService.getApiV1UsersMy() as TData,
    ...options,
  });
export const useCommentServiceGetApiV1Comments = <
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
  useQuery<TData, TError>({
    queryKey: Common.UseCommentServiceGetApiV1CommentsKeyFn(
      { postId },
      queryKey,
    ),
    queryFn: () => CommentService.getApiV1Comments({ postId }) as TData,
    ...options,
  });
export const useProfessorServiceGetApiV1Professors = <
  TData = Common.ProfessorServiceGetApiV1ProfessorsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseProfessorServiceGetApiV1ProfessorsKeyFn(queryKey),
    queryFn: () => ProfessorService.getApiV1Professors() as TData,
    ...options,
  });
export const usePostServiceGetApiV1Posts = <
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
    keywords?: string;
    page: number;
    size: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UsePostServiceGetApiV1PostsKeyFn(
      { category, keywords, page, size },
      queryKey,
    ),
    queryFn: () =>
      PostService.getApiV1Posts({ category, keywords, page, size }) as TData,
    ...options,
  });
export const usePostServiceGetApiV1PostsByPostId = <
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
  useQuery<TData, TError>({
    queryKey: Common.UsePostServiceGetApiV1PostsByPostIdKeyFn(
      { postId },
      queryKey,
    ),
    queryFn: () => PostService.getApiV1PostsByPostId({ postId }) as TData,
    ...options,
  });
export const useLabServiceGetApiV1Labs = <
  TData = Common.LabServiceGetApiV1LabsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseLabServiceGetApiV1LabsKeyFn(queryKey),
    queryFn: () => LabService.getApiV1Labs() as TData,
    ...options,
  });
export const useClubServiceGetApiV1Clubs = <
  TData = Common.ClubServiceGetApiV1ClubsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseClubServiceGetApiV1ClubsKeyFn(queryKey),
    queryFn: () => ClubService.getApiV1Clubs() as TData,
    ...options,
  });
export const useCarouselServiceGetApiV1Carousels = <
  TData = Common.CarouselServiceGetApiV1CarouselsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseCarouselServiceGetApiV1CarouselsKeyFn(queryKey),
    queryFn: () => CarouselService.getApiV1Carousels() as TData,
    ...options,
  });
export const useAboutServiceGetApiV1Abouts = <
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
  useQuery<TData, TError>({
    queryKey: Common.UseAboutServiceGetApiV1AboutsKeyFn({ category }, queryKey),
    queryFn: () => AboutService.getApiV1Abouts({ category }) as TData,
    ...options,
  });
export const useUserServicePostApiV1UsersSignup = <
  TData = Common.UserServicePostApiV1UsersSignupMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: UserCreateRequest;
      },
      TContext
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: UserCreateRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      UserService.postApiV1UsersSignup({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useCommentServicePostApiV1Comments = <
  TData = Common.CommentServicePostApiV1CommentsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CommentRequest;
      },
      TContext
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CommentRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      CommentService.postApiV1Comments({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useUserServicePatchApiV1Users = <
  TData = Common.UserServicePatchApiV1UsersMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: UserUpdateRequest;
      },
      TContext
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: UserUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      UserService.patchApiV1Users({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useUserServicePatchApiV1UsersPassword = <
  TData = Common.UserServicePatchApiV1UsersPasswordMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: UserPasswordUpdateRequest;
      },
      TContext
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: UserPasswordUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      UserService.patchApiV1UsersPassword({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useUserServicePatchApiV1UsersDelete = <
  TData = Common.UserServicePatchApiV1UsersDeleteMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<TData, TError, void, TContext>,
    'mutationFn'
  >,
) =>
  useMutation<TData, TError, void, TContext>({
    mutationFn: () =>
      UserService.patchApiV1UsersDelete() as unknown as Promise<TData>,
    ...options,
  });
export const useCommentServicePatchApiV1CommentsByCommentId = <
  TData = Common.CommentServicePatchApiV1CommentsByCommentIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        commentId: number;
        requestBody: CommentUpdateRequest;
      },
      TContext
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      commentId: number;
      requestBody: CommentUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ commentId, requestBody }) =>
      CommentService.patchApiV1CommentsByCommentId({
        commentId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useCommentServicePatchApiV1CommentsByCommentIdDelete = <
  TData = Common.CommentServicePatchApiV1CommentsByCommentIdDeleteMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        commentId: number;
      },
      TContext
    >,
    'mutationFn'
  >,
) =>
  useMutation<
    TData,
    TError,
    {
      commentId: number;
    },
    TContext
  >({
    mutationFn: ({ commentId }) =>
      CommentService.patchApiV1CommentsByCommentIdDelete({
        commentId,
      }) as unknown as Promise<TData>,
    ...options,
  });
