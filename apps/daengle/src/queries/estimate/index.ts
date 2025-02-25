import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import {
  getUserEstimateRequestGrooming,
  postUserEstimateGrooming,
  postUserEstimateGroomerUserInfo,
  postUserEstimateCare,
  postUserEstimateVetUserInfo,
  getUserEstimateGeneralGroomingPets,
  getUserEstimateGeneralGrooming,
  getUserEstimateGeneralCarePets,
  getUserEstimateGeneralCare,
  getUserEstimateDesignationGroomingPets,
  getUserEstimateGroomingDetail,
  getUserEstimateCareDetail,
  getUserEstimateDesignationGrooming,
  getUserEstimateDesignationCarePets,
  getUserEstimateDesignationCare,
  getUserEstimateRequestCare,
  postUserEstimateCancelGrooming,
  postUserEstimateCancelCare,
} from '~/apis';

import {
  GetUserEstimateRequestGroomingParams,
  GetUserEstimateRequestGroomingResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateCareRequestBody,
  PostUserEstimateVetUserInfoRequestBody,
  GetUserEstimateGeneralGroomingPetsResponse,
  GetUserEstimateGeneralCarePetsResponse,
  GetUserEstimateDesignationGroomingPetsResponse,
  UserEstimateGroomingDetailRequestParams,
  UserEstimateCareDetailRequestParams,
  GetUserEstimateDesignationCarePetsResponse,
  GetUserEstimateRequestCareParams,
  GetUserEstimateRequestCareResponse,
  PostUserEstimateCancelGroomingRequestBody,
  PostUserEstimateCancelCareRequestBody,
} from '~/models/estimate';
import { PAGE_SIZE } from '~/constants/review';
import { UserEstimateCareDetailData, UserEstimateGroomingDetailData } from '~/interfaces/estimate';

export const useUserEstimateGeneralGroomingPetsQuery = () => {
  return useQuery<GetUserEstimateGeneralGroomingPetsResponse>({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_GROOMING_PETS,
    queryFn: () => {
      return getUserEstimateGeneralGroomingPets();
    },
  });
};

export const useUserEstimateGeneralGroomingQuery = (petId: number | undefined) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_GROOMING, petId],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      if (!petId) {
        throw new Error('Pet ID가 설정되지 않았습니다.');
      }
      return getUserEstimateGeneralGrooming({
        petId,
        page: pageParam,
        size: PAGE_SIZE,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.estimates?.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
    enabled: !!petId,
  });
};

export const useUserEstimateGeneralCarePetsQuery = () => {
  return useQuery<GetUserEstimateGeneralCarePetsResponse>({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_CARE_PETS,
    queryFn: getUserEstimateGeneralCarePets,
  });
};

export const useUserEstimateGeneralCareQuery = (petId: number | undefined) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_CARE, petId],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      if (!petId) {
        throw new Error('Pet ID가 설정되지 않았습니다.');
      }
      return getUserEstimateGeneralCare({
        petId,
        page: pageParam,
        size: PAGE_SIZE,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.estimates?.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
    enabled: !!petId,
  });
};

export const useUserEstimateDesignationGroomingPetsQuery = () => {
  return useQuery<GetUserEstimateDesignationGroomingPetsResponse>({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATE_DESIGNATION_GROOMING_PETS,
    queryFn: () => {
      return getUserEstimateDesignationGroomingPets();
    },
  });
};

export const useUserEstimateDesignationGroomingQuery = (petId: number | undefined) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_USER_ESTIMATE_DESIGNATION_GROOMING, petId],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      if (!petId) {
        throw new Error('Pet ID가 설정되지 않았습니다.');
      }
      return getUserEstimateDesignationGrooming({
        petId,
        page: pageParam,
        size: PAGE_SIZE,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.estimates?.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
    enabled: !!petId,
  });
};

export const useUserEstimateDesignationCarePetsQuery = () => {
  return useQuery<GetUserEstimateDesignationCarePetsResponse>({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATE_DESIGNATION_CARE_PETS,
    queryFn: () => {
      return getUserEstimateDesignationCarePets();
    },
  });
};

export const useUerEstimateRequestGroomingQuery = (
  params: GetUserEstimateRequestGroomingParams
) => {
  return useQuery<GetUserEstimateRequestGroomingResponse>({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATES_REQUEST_GROOMING,
    queryFn: () => {
      return getUserEstimateRequestGrooming(params);
    },
  });
};

export const useUserEstimateDesignationCareQuery = (petId: number | undefined) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_USER_ESTIMATE_DESIGNATION_CARE, petId],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      if (!petId) {
        throw new Error('Pet ID가 설정되지 않았습니다.');
      }
      return getUserEstimateDesignationCare({
        petId,
        page: pageParam,
        size: PAGE_SIZE,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.estimates?.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
    enabled: !!petId,
  });
};

export const useUerEstimateRequestCareQuery = (params: GetUserEstimateRequestCareParams) => {
  return useQuery<GetUserEstimateRequestCareResponse>({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATES_REQUEST_CARE,
    queryFn: () => {
      return getUserEstimateRequestCare(params);
    },
  });
};

export const usePostEstimateCancelGroomingMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_CANCEL_GROOMING,
    mutationFn: (body: PostUserEstimateCancelGroomingRequestBody) => {
      return postUserEstimateCancelGrooming(body);
    },
  });
};

export const usePostEstimateCancelCareMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_CANCEL_CARE,
    mutationFn: (body: PostUserEstimateCancelCareRequestBody) => {
      return postUserEstimateCancelCare(body);
    },
  });
};

export const usePostUserEstimateGroomerUserInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_GROOMER_USER_INFO,
    mutationFn: (body: PostUserEstimateGroomerUserInfoRequestBody) =>
      postUserEstimateGroomerUserInfo(body),
  });
};

export const usePostUserEstimateGroomingMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATES_GROOMING,
    mutationFn: postUserEstimateGrooming,
  });
};

export const usePostUserEstimateVetUserInfoMutation = ({ vetId }: { vetId: number }) => {
  return useMutation({
    mutationKey: [...QUERY_KEYS.POST_USER_ESTIMATES_VET_USER_INFO, vetId],
    mutationFn: () => postUserEstimateVetUserInfo({ vetId }),
  });
};

//

export const usePostUserEstimateCareMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_USER_ESTIMATE_CARE],
    mutationFn: postUserEstimateCare,
  });
};

export const useEstimateGroomingDetailQuery = (
  params: UserEstimateGroomingDetailRequestParams,
  enabled: boolean
) => {
  return useQuery<UserEstimateGroomingDetailData>({
    queryKey: [QUERY_KEYS.GET_USER_ESTIMATE_GROOMERS_DETAIL, params],
    queryFn: () => getUserEstimateGroomingDetail(params),
    enabled,
  });
};

export const useEstimateCareDetailQuery = (
  params: UserEstimateCareDetailRequestParams,
  enabled: boolean
) => {
  return useQuery<UserEstimateCareDetailData>({
    queryKey: [QUERY_KEYS.GET_USER_ESTIMATES_VETS_DETAIL, params],
    queryFn: () => getUserEstimateCareDetail(params),
    enabled,
  });
};
