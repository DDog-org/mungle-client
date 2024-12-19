import {
  GetUserSearchRequestParams,
  GetUserGroomerSearchResponse,
  GetUserVetSearchResponse,
} from '~/models';
import { api } from '../config';

export const getUserSearchGroomer = async (params: GetUserSearchRequestParams) => {
  return await api.get<GetUserGroomerSearchResponse>('/user/search/groomer', {
    params,
  });
};

export const getUserSearchVet = async (params: GetUserSearchRequestParams) => {
  return await api.get<GetUserVetSearchResponse>('/user/search/vet', {
    params,
  });
};
