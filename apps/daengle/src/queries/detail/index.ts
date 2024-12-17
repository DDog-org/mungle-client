import { useQuery } from '@tanstack/react-query';
import { GetUserVetDetailRequestParams, GetUserVetDetailResponse } from '~/models/detail';
import { QUERY_KEYS } from '../query-keys';
import { getUserVetDetail } from '~/apis/detail';

export const useGetUserVetDetailQuery = (params: GetUserVetDetailRequestParams) => {
  return useQuery<GetUserVetDetailResponse>({
    queryKey: QUERY_KEYS.GET_USER_VET_DETAIL,
    queryFn: () => {
      return getUserVetDetail(params);
    },
  });
};
