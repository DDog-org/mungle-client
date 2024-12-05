import { api } from '~/apis';
import {
  postGroomingBody,
  postGroomingResponse,
  postUserPetInfoBody,
  postUserPetsInfoResponse,
} from '~/models/daengle';

export const postUserPetsInfo = async (body: postUserPetInfoBody) => {
  return await api.post<postUserPetsInfoResponse>('/user/estimate/groomer-user-info', body);
};

export const postGrooming = async (body: postGroomingBody) => {
  return await api.post<postGroomingResponse>('/user/estimate/grooming', body);
};
