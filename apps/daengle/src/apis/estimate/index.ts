import { api } from '~/apis';
import {
  GroomerDetailResponse,
  CareDetailResponse,
  GetEstimateGroomingDetailParams,
  GetEstimateCareDetailParams,
} from '~/models';

export const getEstimateGroomingDetail = async (params: GetEstimateGroomingDetailParams) => {
  return await api.get<GroomerDetailResponse>(`/user/estimate/${params}/grooming-detail`);
};

export const getEstimateCareDetail = async (params: GetEstimateCareDetailParams) => {
  return await api.get<CareDetailResponse>(`/user/estimate/${params}/care-detail`);
};
