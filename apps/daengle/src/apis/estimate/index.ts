import { api } from '~/apis';
import { UserEstimateCareDetailData, UserEstimateGroomingDetailData } from '~/interfaces/estimate';

import {
  GetUserEstimateRequestGroomingParams,
  GetUserEstimateRequestGroomingResponse,
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
  GetUserEstimateDesignationGroomingPetsResponse,
  UserEstimateGroomingDetailRequestParams,
  UserEstimateCareDetailRequestParams,
  GetUserEstimateDesignationGroomingRequestParams,
  GetUserEstimateDesignationGroomingResponse,
  GetUserEstimateDesignationCarePetsResponse,
  GetUserEstimateDesignationCareRequestParams,
  GetUserEstimateDesignationCareResponse,
  GetUserEstimateRequestCareParams,
  GetUserEstimateRequestCareResponse,
  PostUserEstimateCancelGroomingRequestBody,
  PostUserEstimateCancelGroomingResponse,
  PostUserEstimateCancelCareRequestBody,
  PostUserEstimateCancelCareResponse,
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

export const getUserEstimateDesignationGroomingPets = async () => {
  return await api.get<GetUserEstimateDesignationGroomingPetsResponse>(
    '/user/estimate/designation/grooming/pets'
  );
};

export const getUserEstimateDesignationGrooming = async (
  params: GetUserEstimateDesignationGroomingRequestParams
) => {
  const { petId, page, size } = params;

  return await api.get<GetUserEstimateDesignationGroomingResponse>(
    `/user/estimate/designation/grooming/${petId}`,
    {
      params: { page, size },
    }
  );
};

export const getUserEstimateDesignationCarePets = async () => {
  return await api.get<GetUserEstimateDesignationCarePetsResponse>(
    '/user/estimate/designation/care/pets'
  );
};

export const getUserEstimateDesignationCare = async (
  params: GetUserEstimateDesignationCareRequestParams
) => {
  const { petId, page, size } = params;

  return await api.get<GetUserEstimateDesignationCareResponse>(
    `/user/estimate/designation/care/${petId}`,
    {
      params: { page, size },
    }
  );
};

export const getUserEstimateRequestGrooming = async (
  params: GetUserEstimateRequestGroomingParams
) => {
  return await api.get<GetUserEstimateRequestGroomingResponse>(
    `/user/estimate/request/grooming/${params.groomingEstimateId}`
  );
};

export const getUserEstimateRequestCare = async (params: GetUserEstimateRequestCareParams) => {
  return await api.get<GetUserEstimateRequestCareResponse>(
    `/user/estimate/request/care/${params.careEstimateId}`
  );
};

export const postUserEstimateCancelGrooming = async (
  body: PostUserEstimateCancelGroomingRequestBody
) => {
  return await api.post<PostUserEstimateCancelGroomingResponse>(
    '/user/estimate/cancel/grooming',
    body
  );
};

export const postUserEstimateCancelCare = async (body: PostUserEstimateCancelCareRequestBody) => {
  return await api.post<PostUserEstimateCancelCareResponse>('/user/estimate/cancel/care', body);
};

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

export const getUserEstimateGroomingDetail = async (
  params: UserEstimateGroomingDetailRequestParams
) => {
  return await api.get<UserEstimateGroomingDetailData>(
    `/user/estimate/${params.groomingEstimateId}/grooming-detail`
  );
};

export const getUserEstimateCareDetail = async (params: UserEstimateCareDetailRequestParams) => {
  return await api.get<UserEstimateCareDetailData>(
    `/user/estimate/${params.careEstimateId}/care-detail`
  );
};
