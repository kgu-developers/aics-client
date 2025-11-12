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
export const ensureUseUserServiceGetApiV1UsersMyData = (
  queryClient: QueryClient,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseUserServiceGetApiV1UsersMyKeyFn(),
    queryFn: () => UserService.getApiV1UsersMy(),
  });
export const ensureUseCommentServiceGetApiV1CommentsData = (
  queryClient: QueryClient,
  {
    postId,
  }: {
    postId: number;
  },
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseCommentServiceGetApiV1CommentsKeyFn({ postId }),
    queryFn: () => CommentService.getApiV1Comments({ postId }),
  });
export const ensureUseProfessorServiceGetApiV1ProfessorsData = (
  queryClient: QueryClient,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseProfessorServiceGetApiV1ProfessorsKeyFn(),
    queryFn: () => ProfessorService.getApiV1Professors(),
  });
export const ensureUsePostServiceGetApiV1PostsData = (
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
  queryClient.ensureQueryData({
    queryKey: Common.UsePostServiceGetApiV1PostsKeyFn({
      category,
      keywords,
      page,
      size,
    }),
    queryFn: () =>
      PostService.getApiV1Posts({ category, keywords, page, size }),
  });
export const ensureUsePostServiceGetApiV1PostsByPostIdData = (
  queryClient: QueryClient,
  {
    postId,
  }: {
    postId: number;
  },
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UsePostServiceGetApiV1PostsByPostIdKeyFn({ postId }),
    queryFn: () => PostService.getApiV1PostsByPostId({ postId }),
  });
export const ensureUseLabServiceGetApiV1LabsData = (queryClient: QueryClient) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseLabServiceGetApiV1LabsKeyFn(),
    queryFn: () => LabService.getApiV1Labs(),
  });
export const ensureUseClubServiceGetApiV1ClubsData = (
  queryClient: QueryClient,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseClubServiceGetApiV1ClubsKeyFn(),
    queryFn: () => ClubService.getApiV1Clubs(),
  });
export const ensureUseCarouselServiceGetApiV1CarouselsData = (
  queryClient: QueryClient,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseCarouselServiceGetApiV1CarouselsKeyFn(),
    queryFn: () => CarouselService.getApiV1Carousels(),
  });
export const ensureUseAboutServiceGetApiV1AboutsData = (
  queryClient: QueryClient,
  {
    category,
  }: {
    category: 'DEPT_INTRO' | 'DIRECTIONS';
  },
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseAboutServiceGetApiV1AboutsKeyFn({ category }),
    queryFn: () => AboutService.getApiV1Abouts({ category }),
  });
