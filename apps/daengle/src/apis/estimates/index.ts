import { api } from '~/apis';
import { postUserPetsInfoResponse } from '~/models/daengle';

export const postUserPetsInfo = async (groomerId: number) => {
  return await api.post<postUserPetsInfoResponse>('/estimate/groomer-user-info', groomerId);
};
