// generated with @7nohe/openapi-react-query-codegen@1.6.2

import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  AboutService,
  CarouselService,
  ClubService,
  FileService,
  LabService,
  PostService,
  ProfessorService,
  UserService,
} from '../requests/services.gen';
import {
  AboutCreateRequest,
  AboutUpdateRequest,
  CarouselRequest,
  CarouselUpdateRequest,
  ClubCreateRequest,
  ClubUpdateRequest,
  LabCreateRequest,
  LabUpdateRequest,
  PostCreateRequest,
  PostUpdateRequest,
  ProfessorRequest,
  UserKickOutListRequest,
} from '../requests/types.gen';
import * as Common from './common';
export const useUserServiceGetApiV1Users = <
  TData = Common.UserServiceGetApiV1UsersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    name,
    page,
    size,
  }: {
    name?: string;
    page: number;
    size: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseUserServiceGetApiV1UsersKeyFn(
      { name, page, size },
      queryKey,
    ),
    queryFn: () => UserService.getApiV1Users({ name, page, size }) as TData,
    ...options,
  });
export const useUserServicePostApiV1UsersDelete = <
  TData = Common.UserServicePostApiV1UsersDeleteMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: UserKickOutListRequest;
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
      requestBody: UserKickOutListRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      UserService.postApiV1UsersDelete({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useProfessorServicePostApiV1Professors = <
  TData = Common.ProfessorServicePostApiV1ProfessorsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: ProfessorRequest;
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
      requestBody: ProfessorRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      ProfessorService.postApiV1Professors({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const usePostServicePostApiV1Posts = <
  TData = Common.PostServicePostApiV1PostsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        fileId?: number;
        requestBody: PostCreateRequest;
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
      fileId?: number;
      requestBody: PostCreateRequest;
    },
    TContext
  >({
    mutationFn: ({ fileId, requestBody }) =>
      PostService.postApiV1Posts({
        fileId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useLabServicePostApiV1Labs = <
  TData = Common.LabServicePostApiV1LabsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        fileId?: number;
        requestBody: LabCreateRequest;
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
      fileId?: number;
      requestBody: LabCreateRequest;
    },
    TContext
  >({
    mutationFn: ({ fileId, requestBody }) =>
      LabService.postApiV1Labs({
        fileId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useFileServicePostApiV1FilesPost = <
  TData = Common.FileServicePostApiV1FilesPostMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData?: { file: Blob | File };
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
      formData?: { file: Blob | File };
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      FileService.postApiV1FilesPost({ formData }) as unknown as Promise<TData>,
    ...options,
  });
export const useFileServicePostApiV1FilesLab = <
  TData = Common.FileServicePostApiV1FilesLabMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData?: { file: Blob | File };
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
      formData?: { file: Blob | File };
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      FileService.postApiV1FilesLab({ formData }) as unknown as Promise<TData>,
    ...options,
  });
export const useFileServicePostApiV1FilesClub = <
  TData = Common.FileServicePostApiV1FilesClubMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData?: { file: Blob | File };
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
      formData?: { file: Blob | File };
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      FileService.postApiV1FilesClub({ formData }) as unknown as Promise<TData>,
    ...options,
  });
export const useFileServicePostApiV1FilesCarousel = <
  TData = Common.FileServicePostApiV1FilesCarouselMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData?: { file: Blob | File };
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
      formData?: { file: Blob | File };
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      FileService.postApiV1FilesCarousel({
        formData,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useFileServicePostApiV1FilesAbout = <
  TData = Common.FileServicePostApiV1FilesAboutMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData?: { file: Blob | File };
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
      formData?: { file: Blob | File };
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      FileService.postApiV1FilesAbout({
        formData,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useClubServicePostApiV1Clubs = <
  TData = Common.ClubServicePostApiV1ClubsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        fileId?: number;
        requestBody: ClubCreateRequest;
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
      fileId?: number;
      requestBody: ClubCreateRequest;
    },
    TContext
  >({
    mutationFn: ({ fileId, requestBody }) =>
      ClubService.postApiV1Clubs({
        fileId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useCarouselServicePostApiV1Carousels = <
  TData = Common.CarouselServicePostApiV1CarouselsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        fileId: number;
        requestBody: CarouselRequest;
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
      fileId: number;
      requestBody: CarouselRequest;
    },
    TContext
  >({
    mutationFn: ({ fileId, requestBody }) =>
      CarouselService.postApiV1Carousels({
        fileId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useAboutServicePostApiV1Abouts = <
  TData = Common.AboutServicePostApiV1AboutsMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: AboutCreateRequest;
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
      requestBody: AboutCreateRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AboutService.postApiV1Abouts({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useProfessorServicePatchApiV1ProfessorsById = <
  TData = Common.ProfessorServicePatchApiV1ProfessorsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
        requestBody: ProfessorRequest;
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
      id: number;
      requestBody: ProfessorRequest;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      ProfessorService.patchApiV1ProfessorsById({
        id,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const usePostServicePatchApiV1PostsByPostId = <
  TData = Common.PostServicePatchApiV1PostsByPostIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        postId: number;
        requestBody: PostUpdateRequest;
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
      postId: number;
      requestBody: PostUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ postId, requestBody }) =>
      PostService.patchApiV1PostsByPostId({
        postId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const usePostServicePatchApiV1PostsByPostIdPin = <
  TData = Common.PostServicePatchApiV1PostsByPostIdPinMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        postId: number;
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
      postId: number;
    },
    TContext
  >({
    mutationFn: ({ postId }) =>
      PostService.patchApiV1PostsByPostIdPin({
        postId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const usePostServicePatchApiV1PostsByPostIdDelete = <
  TData = Common.PostServicePatchApiV1PostsByPostIdDeleteMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        postId: number;
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
      postId: number;
    },
    TContext
  >({
    mutationFn: ({ postId }) =>
      PostService.patchApiV1PostsByPostIdDelete({
        postId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useLabServicePatchApiV1LabsById = <
  TData = Common.LabServicePatchApiV1LabsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
        requestBody: LabUpdateRequest;
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
      id: number;
      requestBody: LabUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      LabService.patchApiV1LabsById({
        id,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useClubServicePatchApiV1ClubsById = <
  TData = Common.ClubServicePatchApiV1ClubsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
        requestBody: ClubUpdateRequest;
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
      id: number;
      requestBody: ClubUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      ClubService.patchApiV1ClubsById({
        id,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useCarouselServicePatchApiV1CarouselsById = <
  TData = Common.CarouselServicePatchApiV1CarouselsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
        requestBody: CarouselUpdateRequest;
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
      id: number;
      requestBody: CarouselUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      CarouselService.patchApiV1CarouselsById({
        id,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useAboutServicePatchApiV1AboutsById = <
  TData = Common.AboutServicePatchApiV1AboutsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
        requestBody: AboutUpdateRequest;
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
      id: number;
      requestBody: AboutUpdateRequest;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      AboutService.patchApiV1AboutsById({
        id,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useProfessorServiceDeleteApiV1ProfessorsById = <
  TData = Common.ProfessorServiceDeleteApiV1ProfessorsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
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
      id: number;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      ProfessorService.deleteApiV1ProfessorsById({
        id,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useLabServiceDeleteApiV1LabsById = <
  TData = Common.LabServiceDeleteApiV1LabsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
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
      id: number;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      LabService.deleteApiV1LabsById({ id }) as unknown as Promise<TData>,
    ...options,
  });
export const useClubServiceDeleteApiV1ClubsById = <
  TData = Common.ClubServiceDeleteApiV1ClubsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
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
      id: number;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      ClubService.deleteApiV1ClubsById({ id }) as unknown as Promise<TData>,
    ...options,
  });
export const useCarouselServiceDeleteApiV1CarouselsById = <
  TData = Common.CarouselServiceDeleteApiV1CarouselsByIdMutationResult,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: number;
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
      id: number;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      CarouselService.deleteApiV1CarouselsById({
        id,
      }) as unknown as Promise<TData>,
    ...options,
  });
