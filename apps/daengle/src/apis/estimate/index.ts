import { api } from '~/apis';

import {
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateGroomerUserInfoResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomingResponse,
  PostUserEstimateCareRequestBody,
  PostUserEstimateCareResponse,
  PostUserEstimateVetUserInfoRequestBody,
  PostUserEstimateVetUserInfoResponse,
  GetUserEstimateGeneralGroomingPetsResponse,
  GetUserEstimateGeneralGroomingRequestParams,
  GetUserEstimateGeneralGroomingResponse,
  GetUserEstimateGeneralCarePetsResponse,
  GetUserEstimateGeneralCareRequestParams,
  GetUserEstimateGeneralCareResponse,
} from '~/models/estimate';

export const getUserEstimateGeneralGroomingPets = async () => {
  return await api.get<GetUserEstimateGeneralGroomingPetsResponse>(
    '/user/estimate/general/grooming/pets'
  );
};

export const getUserEstimateGeneralGrooming = async (
  params: GetUserEstimateGeneralGroomingRequestParams
) => {
  const { petId, page, size } = params;

  return await api.get<GetUserEstimateGeneralGroomingResponse>(
    `/user/estimate/general/grooming/${petId}`,
    {
      params: { page, size },
    }
  );
};

export const getUserEstimateGeneralCarePets = async () => {
  return await api.get<GetUserEstimateGeneralCarePetsResponse>('/user/estimate/general/care/pets');
};

export const getUserEstimateGeneralCare = async (
  params: GetUserEstimateGeneralCareRequestParams
) => {
  const { petId, page, size } = params;

  return await api.get<GetUserEstimateGeneralCareResponse>(`/user/estimate/general/care/${petId}`, {
    params: { page, size },
  });
};

/////////

export const postUserEstimateGroomerUserInfo = async (
  body: PostUserEstimateGroomerUserInfoRequestBody
) => {
  return await api.post<PostUserEstimateGroomerUserInfoResponse>(
    '/user/estimate/groomer-user-info',
    body
  );
};

export const postUserEstimateGrooming = async (body: PostUserEstimateGroomingRequestBody) => {
  return await api.post<PostUserEstimateGroomingResponse>('/user/estimate/grooming', body);
};

export const postUserEstimateVetUserInfo = async (body: PostUserEstimateVetUserInfoRequestBody) => {
  return await api.post<PostUserEstimateVetUserInfoResponse>('/user/estimate/vet-user-info', body);
};

export const postUserEstimateCare = async (body: PostUserEstimateCareRequestBody) => {
  return await api.post<PostUserEstimateCareResponse>('/user/estimate/care', body);
};
