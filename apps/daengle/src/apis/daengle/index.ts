import { api } from '~/apis';
import { getUserPetsInfoResponse } from '~/models/daengle';

export const getUserPetsInfo = async () => {
  const response = await api.get<getUserPetsInfoResponse>('/daengle/user-pets-info');
  return response;
};
