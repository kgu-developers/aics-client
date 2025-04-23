// generated with @7nohe/openapi-react-query-codegen@1.6.2

import type { UseQueryResult } from '@tanstack/react-query'
import type {
  AboutService,
  CarouselService,
  ClubService,
  FileService,
  LabService,
  PostService,
  ProfessorService,
  UserService,
} from '../requests/services.gen'
export type UserServiceGetApiV1UsersDefaultResponse = Awaited<
  ReturnType<typeof UserService.getApiV1Users>
>
export type UserServiceGetApiV1UsersQueryResult<
  TData = UserServiceGetApiV1UsersDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>
export const useUserServiceGetApiV1UsersKey = 'UserServiceGetApiV1Users'
export const UseUserServiceGetApiV1UsersKeyFn = (
  {
    name,
    page,
    size,
  }: {
    name?: string
    page: number
    size: number
  },
  queryKey?: Array<unknown>,
) => [useUserServiceGetApiV1UsersKey, ...(queryKey ?? [{ name, page, size }])]
export type UserServicePostApiV1UsersDeleteMutationResult = Awaited<
  ReturnType<typeof UserService.postApiV1UsersDelete>
>
export type ProfessorServicePostApiV1ProfessorsMutationResult = Awaited<
  ReturnType<typeof ProfessorService.postApiV1Professors>
>
export type PostServicePostApiV1PostsMutationResult = Awaited<
  ReturnType<typeof PostService.postApiV1Posts>
>
export type LabServicePostApiV1LabsMutationResult = Awaited<
  ReturnType<typeof LabService.postApiV1Labs>
>
export type FileServicePostApiV1FilesPostMutationResult = Awaited<
  ReturnType<typeof FileService.postApiV1FilesPost>
>
export type FileServicePostApiV1FilesLabMutationResult = Awaited<
  ReturnType<typeof FileService.postApiV1FilesLab>
>
export type FileServicePostApiV1FilesClubMutationResult = Awaited<
  ReturnType<typeof FileService.postApiV1FilesClub>
>
export type FileServicePostApiV1FilesCarouselMutationResult = Awaited<
  ReturnType<typeof FileService.postApiV1FilesCarousel>
>
export type FileServicePostApiV1FilesAboutMutationResult = Awaited<
  ReturnType<typeof FileService.postApiV1FilesAbout>
>
export type ClubServicePostApiV1ClubsMutationResult = Awaited<
  ReturnType<typeof ClubService.postApiV1Clubs>
>
export type CarouselServicePostApiV1CarouselsMutationResult = Awaited<
  ReturnType<typeof CarouselService.postApiV1Carousels>
>
export type AboutServicePostApiV1AboutsMutationResult = Awaited<
  ReturnType<typeof AboutService.postApiV1Abouts>
>
export type ProfessorServicePatchApiV1ProfessorsByIdMutationResult = Awaited<
  ReturnType<typeof ProfessorService.patchApiV1ProfessorsById>
>
export type PostServicePatchApiV1PostsByPostIdMutationResult = Awaited<
  ReturnType<typeof PostService.patchApiV1PostsByPostId>
>
export type PostServicePatchApiV1PostsByPostIdPinMutationResult = Awaited<
  ReturnType<typeof PostService.patchApiV1PostsByPostIdPin>
>
export type PostServicePatchApiV1PostsByPostIdDeleteMutationResult = Awaited<
  ReturnType<typeof PostService.patchApiV1PostsByPostIdDelete>
>
export type LabServicePatchApiV1LabsByIdMutationResult = Awaited<
  ReturnType<typeof LabService.patchApiV1LabsById>
>
export type ClubServicePatchApiV1ClubsByIdMutationResult = Awaited<
  ReturnType<typeof ClubService.patchApiV1ClubsById>
>
export type CarouselServicePatchApiV1CarouselsByIdMutationResult = Awaited<
  ReturnType<typeof CarouselService.patchApiV1CarouselsById>
>
export type AboutServicePatchApiV1AboutsByIdMutationResult = Awaited<
  ReturnType<typeof AboutService.patchApiV1AboutsById>
>
export type ProfessorServiceDeleteApiV1ProfessorsByIdMutationResult = Awaited<
  ReturnType<typeof ProfessorService.deleteApiV1ProfessorsById>
>
export type LabServiceDeleteApiV1LabsByIdMutationResult = Awaited<
  ReturnType<typeof LabService.deleteApiV1LabsById>
>
export type ClubServiceDeleteApiV1ClubsByIdMutationResult = Awaited<
  ReturnType<typeof ClubService.deleteApiV1ClubsById>
>
export type CarouselServiceDeleteApiV1CarouselsByIdMutationResult = Awaited<
  ReturnType<typeof CarouselService.deleteApiV1CarouselsById>
>
