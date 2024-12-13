import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import {
  // getUserEstimateList,
  postUserEstimateGrooming,
  postUserEstimateGroomerUserInfo,
  postUserEstimateCare,
  postUserEstimateVetUserInfo,
  getUserEstimateGeneralGroomingPets,
  getUserEstimateGeneralGrooming,
  getUserEstimateGeneralCarePets,
  getUserEstimateGeneralCare,
} from '~/apis';

import {
  // GetUserEstimateListResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateCareRequestBody,
  PostUserEstimateVetUserInfoRequestBody,
  GetUserEstimateGeneralGroomingPetsResponse,
  GetUserEstimateGeneralGroomingResponse,
  GetUserEstimateGeneralCarePetsResponse,
} from '~/models/estimate';
import { PAGE_SIZE } from '~/constants/review';

// export const useUserEstimateListQuery = () => {
//   return useQuery<GetUserEstimateListResponse>({
//     queryKey: QUERY_KEYS.GET_DAENGLE_ESTIMATE_LIST,
//     queryFn: async () => {
//       try {
//         const data = await getUserEstimateList();
//         return data;
//       } catch (error) {
//         throw new Error('견적 리스트를 가져오는 데 실패했습니다.');
//       }
//     },
//   });
// };

export const useUserEstimateGeneralGroomingPetsQuery = () => {
  return useQuery<GetUserEstimateGeneralGroomingPetsResponse>({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_GROOMING_PETS,
    queryFn: () => {
      return getUserEstimateGeneralGroomingPets();
    },
  });
};

export const useUserEstimateGeneralGroomingQuery = (petId: number) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_GROOMING,
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
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
    queryFn: () => {
      return getUserEstimateGeneralCarePets();
    },
  });
};

export const useUserEstimateGeneralCareQuery = (petId: number) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_CARE,
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
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
// export const useUserEstimateGeneralGroomingQuery = () => {
//   return useQuery<GetUserEstimateGeneralGroomingResponse>({
//     queryKey: QUERY_KEYS.GET_USER_ESTIMATE_GENERAL_GROOMING_PETS,
//     queryFn: () => {
//       return getUserEstimateGeneralGrooming(params);
//     }
//   })
// }

///////////////////////

export const usePostUserEstimateGroomerUserInfoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_GROOMER_USER_INFO,
    mutationFn: async (body: PostUserEstimateGroomerUserInfoRequestBody) => {
      try {
        return await postUserEstimateGroomerUserInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostUserEstimateGroomingMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_ESTIMATE_GROOMING,
    mutationFn: async (body: PostUserEstimateGroomingRequestBody) => {
      try {
        return await postUserEstimateGrooming(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostUserEstimateVetUserInfoMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_USER_ESTIMATE_VET_USER_INFO],
    mutationFn: async (body: PostUserEstimateVetUserInfoRequestBody) => {
      try {
        return await postUserEstimateVetUserInfo(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostUserEstimateCareMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_USER_ESTIMATE_CARE],
    mutationFn: async (body: PostUserEstimateCareRequestBody) => {
      try {
        return await postUserEstimateCare(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
