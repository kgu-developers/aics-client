// generated with @7nohe/openapi-react-query-codegen@1.6.2

import type { QueryClient } from '@tanstack/react-query';

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
export const prefetchUseUserServiceGetApiV1UsersMy = (
  queryClient: QueryClient,
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseUserServiceGetApiV1UsersMyKeyFn(),
    queryFn: () => UserService.getApiV1UsersMy(),
  });
export const prefetchUseCommentServiceGetApiV1Comments = (
  queryClient: QueryClient,
  {
    postId,
  }: {
    postId: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseCommentServiceGetApiV1CommentsKeyFn({ postId }),
    queryFn: () => CommentService.getApiV1Comments({ postId }),
  });
export const prefetchUseProfessorServiceGetApiV1Professors = (
  queryClient: QueryClient,
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseProfessorServiceGetApiV1ProfessorsKeyFn(),
    queryFn: () => ProfessorService.getApiV1Professors(),
  });
export const prefetchUsePostServiceGetApiV1Posts = (
  queryClient: QueryClient,
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
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UsePostServiceGetApiV1PostsKeyFn({
      category,
      keywords,
      page,
      size,
    }),
    queryFn: () =>
      PostService.getApiV1Posts({ category, keywords, page, size }),
  });
export const prefetchUsePostServiceGetApiV1PostsByPostId = (
  queryClient: QueryClient,
  {
    postId,
  }: {
    postId: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UsePostServiceGetApiV1PostsByPostIdKeyFn({ postId }),
    queryFn: () => PostService.getApiV1PostsByPostId({ postId }),
  });
export const prefetchUseLabServiceGetApiV1Labs = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseLabServiceGetApiV1LabsKeyFn(),
    queryFn: () => LabService.getApiV1Labs(),
  });
export const prefetchUseClubServiceGetApiV1Clubs = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseClubServiceGetApiV1ClubsKeyFn(),
    queryFn: () => ClubService.getApiV1Clubs(),
  });
export const prefetchUseCarouselServiceGetApiV1Carousels = (
  queryClient: QueryClient,
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseCarouselServiceGetApiV1CarouselsKeyFn(),
    queryFn: () => CarouselService.getApiV1Carousels(),
  });
export const prefetchUseAboutServiceGetApiV1Abouts = (
  queryClient: QueryClient,
  {
    category,
  }: {
    category: 'DEPT_INTRO' | 'DIRECTIONS';
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAboutServiceGetApiV1AboutsKeyFn({ category }),
    queryFn: () => AboutService.getApiV1Abouts({ category }),
  });
