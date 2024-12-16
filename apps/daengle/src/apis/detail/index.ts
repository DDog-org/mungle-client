import { api } from '~/apis';
import { GetUserGroomerDetailRequestParams, GetUserGroomerDetailResponse } from '~/models/detail';

export const getUserGroomerDetail = async ({ groomerId }: GetUserGroomerDetailRequestParams) => {
  return await api.get<GetUserGroomerDetailResponse>(`/user/groomer/${groomerId}`);
};
