import {
  GetUserReservationCareDetailRequestParams,
  GetUserReservationCareDetailResponse,
  GetUserReservationCareListResponse,
  GetUserReservationGroomingDetailRequestParams,
  GetUserReservationGroomingDetailResponse,
  GetUserReservationGroomingListResponse,
} from '~/models/reservation';
import { api } from '../config';

export const getUserReservationGroomingList = async () => {
  return await api.get<GetUserReservationGroomingListResponse>('/user/reservation/grooming/list');
};

export const getUserReservationCareList = async () => {
  return await api.get<GetUserReservationCareListResponse>('/user/reservation/care/list');
};

export const getUserReservationGroomingDetail = async (
  params: GetUserReservationGroomingDetailRequestParams
) => {
  return await api.get<GetUserReservationGroomingDetailResponse>(
    `/user/reservation/grooming/${params.estimateId}/detail`
  );
};

export const getUserReservationCareDetail = async (
  params: GetUserReservationCareDetailRequestParams
) => {
  return await api.get<GetUserReservationCareDetailResponse>(
    `/user/reservation/care/${params.estimateId}/detail`
  );
};
