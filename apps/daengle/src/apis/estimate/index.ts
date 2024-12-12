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
} from '~/models/estimate';

// export const getUserEstimateList = async () => {
//   return await api.get<GetUserEstimateListResponse>('/user/estimate/list');
// };

export const getUserEstimateGeneralGroomingPets = async () => {
  return await api.get<GetUserEstimateGeneralGroomingPetsResponse>(
    '/user/estimate/general/grooming/pets'
  );
};

// export const getUserGroomingMyReviewList = async (
//   params: GetUserGroomingMyReviewListRequestParams
// ) => {
//   return await api.get<GetUserGroomingMyReviewListResponse>(
//     '/user/grooming/my-review/list',
//     params
//   );
// };

export const getUserEstimateGeneralGrooming = async (
  params: GetUserEstimateGeneralGroomingRequestParams
) => {
  return await api.get<GetUserEstimateGeneralGroomingResponse>(
    `/user/estimate/general/grooming/${params.petId}`,
    { params }
  );
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
