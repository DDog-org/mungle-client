import { useQuery } from '@tanstack/react-query';
import {
  GetGroomerMyPageShopInfoRequestParams,
  GetGroomerMyPageShopInfoResponse,
} from '~/models/mypage';
import { QUERY_KEYS } from '../query-keys';
import { getGroomerMyPageShopInfo } from '~/apis/mypage';

export const useGetGroomerMyPageShopInfoQuery = (params: GetGroomerMyPageShopInfoRequestParams) => {
  return useQuery<GetGroomerMyPageShopInfoResponse>({
    queryKey: QUERY_KEYS.GET_GROOMER_MYPAGE_SHOP,
    queryFn: () => {
      return getGroomerMyPageShopInfo(params);
    },
  });
};
