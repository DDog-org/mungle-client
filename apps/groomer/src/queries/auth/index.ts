import { useMutation, useQuery } from '@tanstack/react-query';
import exp from 'constants';
import { getGroomerModifyPage, postJoin, postKakao } from '~/apis';
import { PostJoinRequestBody, PostKakaoRequestBody } from '~/models/auth';
import { QUERY_KEYS } from '~/queries/query-keys';

export const usePostKakaoMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_KAKAO,
    mutationFn: async (body: PostKakaoRequestBody) => {
      try {
        return await postKakao(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostJoinMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_JOIN,
    mutationFn: async (body: PostJoinRequestBody) => {
      return await postJoin(body);
    },
  });
};

export const useGetGroomerModifyPageQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_GROOMER_MODIFY_PAGE,
    queryFn: getGroomerModifyPage,
  });
};
