import type { AxiosResponse } from 'axios';

import { post, del, get, patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import type {
  SubmissionType,
  CreateScheduleRequest,
  UpdateScheduleRequest,
} from '~/shared/types';

import type { ScheduleItem } from '~/pages/admin/schedule/model';

export interface ScheduleListResponse {
  contents: ScheduleItem[];
}

export interface ScheduleDetailResponse extends ScheduleItem {}

export interface UpdateScheduleContentRequest {
  content: string;
}

export async function createSchedule(
  data: CreateScheduleRequest,
): Promise<AxiosResponse<ScheduleItem>> {
  return post<ScheduleItem, CreateScheduleRequest>({
    request: END_POINT.ADMIN.SCHEDULE_CREATE,
    data,
  });
}

export async function updateSchedule(
  scheduleId: number,
  data: UpdateScheduleRequest,
): Promise<AxiosResponse<ScheduleItem>> {
  return patch<ScheduleItem, UpdateScheduleRequest>({
    request: END_POINT.ADMIN.SCHEDULE_UPDATE(scheduleId),
    data,
  });
}

export async function deleteSchedule(
  scheduleId: number,
): Promise<AxiosResponse<void>> {
  return del<void>({
    request: END_POINT.ADMIN.SCHEDULE_DELETE(scheduleId),
  });
}

export async function getScheduleList(): Promise<
  AxiosResponse<ScheduleListResponse>
> {
  return get<ScheduleListResponse>({
    request: END_POINT.USER.SCHEDULE_LIST,
  });
}

export async function getScheduleDetail(
  scheduleId: number,
): Promise<AxiosResponse<ScheduleDetailResponse>> {
  return get<ScheduleDetailResponse>({
    request: END_POINT.USER.SCHEDULE(scheduleId),
  });
}

export async function updateScheduleContent(
  submissionType: SubmissionType,
  data: UpdateScheduleContentRequest,
): Promise<AxiosResponse<{ content: string }>> {
  return patch<{ content: string }, UpdateScheduleContentRequest>({
    request: END_POINT.ADMIN.SCHEDULE_CONTENT_UPDATE(submissionType),
    data,
  });
}

export async function getScheduleContent(
  submissionType: SubmissionType,
): Promise<AxiosResponse<{ content: string }>> {
  return get<{ content: string }>({
    request: END_POINT.USER.SCHEDULE_CONTENT(submissionType),
  });
}
