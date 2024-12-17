import { GetUserVetDetailRequestParams, GetUserVetDetailResponse } from '~/models/detail';
import { api } from '../config';

export const getUserVetDetail = async ({ vetId }: GetUserVetDetailRequestParams) => {
  return await api.get<GetUserVetDetailResponse>(`/user/vet/${vetId}`);
};
