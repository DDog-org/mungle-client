import {
  GetVetEstimateDesignationListResponse,
  GetVetEstimateGeneralListResponse,
} from '~/models/estimate';
import { api } from '../config';

export const getVetEstimateGeneralList = async () => {
  return await api.get<GetVetEstimateGeneralListResponse>('/vet/estimate/general/list');
};

export const getVetEstimateDesignationList = async () => {
  return await api.get<GetVetEstimateDesignationListResponse>('/vet/estimate/designation/list');
};
