import { api } from '~/apis';
import {
  GetBreedListResponse,
  GetVetPetInfoRequestParams,
  GetVetPetInfoResponse,
  GetVetReservationRequestParams,
  GetVetReservationResponse,
  GetVetWeekRequestParams,
  GetVetWeekResponse,
} from '~/models/reservation';

export const getVetWeek = async (params: GetVetWeekRequestParams) => {
  return await api.get<GetVetWeekResponse>(`/vet/week/${params.date}`);
};

export const getVetPetInfo = async (params: GetVetPetInfoRequestParams) => {
  return await api.get<GetVetPetInfoResponse>(`/vet/petInfo/${params.petId}`);
};

export const getBreedList = async () => {
  return await api.get<GetBreedListResponse>('/user/breed/list');
};

export const getVetReservation = async (params: GetVetReservationRequestParams) => {
  return await api.get<GetVetReservationResponse>(`/vet/reservation/${params.reservationId}`);
};
