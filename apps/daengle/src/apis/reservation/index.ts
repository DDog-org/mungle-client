import {
  GetUserReservationCareListResponse,
  GetUserReservationGroomingListResponse,
} from '~/models/reservation';
import { api } from '../config';

export const getUserReservationGroomingList = async () => {
  return await api.get<GetUserReservationGroomingListResponse>('/user/reservation/grooming/list');
};

export const getUserReservationCareList = async () => {
  return await api.get<GetUserReservationCareListResponse>('/user/reservation/care/list');
};
