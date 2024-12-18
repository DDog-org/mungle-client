import {
  GetGroomerMyPageShopInfoRequestParams,
  GetGroomerMyPageShopInfoResponse,
} from '~/models/mypage';
import { api } from '~/apis';

export const getGroomerMyPageShopInfo = async ({ id }: GetGroomerMyPageShopInfoRequestParams) => {
  return await api.get<GetGroomerMyPageShopInfoResponse>(`/groomer/mypage/shop/${id}`);
};
