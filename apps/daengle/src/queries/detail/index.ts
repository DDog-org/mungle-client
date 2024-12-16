import { useQuery } from '@tanstack/react-query';
import { GetUserGroomerDetailRequestParams, GetUserGroomerDetailResponse } from '~/models/detail';
import { QUERY_KEYS } from '../query-keys';
import { getUserGroomerDetail } from '~/apis/detail';

export const useGetUserGroomerDetailQuery = (params: GetUserGroomerDetailRequestParams) => {
  return useQuery<GetUserGroomerDetailResponse>({
    queryKey: QUERY_KEYS.GET_USER_GROOMER_DETAIL,
    queryFn: () => {
      return getUserGroomerDetail(params);
    },
  });
};
