import { api } from '~/apis';
import { postUserPetsInfoResponse } from '~/models/daengle';

export const postUserPetsInfo = async ({ groomerId }: { groomerId: number }) => {
  const response = await api.post<postUserPetsInfoResponse>('/daengle/user-pets-info', groomerId);
  return response;
};
