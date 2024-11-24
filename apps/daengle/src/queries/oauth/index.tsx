import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { postKakaoOauth, postOauthKakao } from '~/api/oauth';

export const useFetchKakaoAccessToken = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.FETCH_KAKAO_ACCESS_TOKEN,
    mutationFn: async (code: string) => {
      try {
        return await postKakaoOauth(code);
      } catch {
        throw new Error('카카오 토큰을 가져오는데 실패했습니다.');
      }
    },
  });
};
export const usePostApiOauthKakao = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_API_OAUTH_KAKAO,
    mutationFn: async ({ accessToken, loginType }: { accessToken: string; loginType: string }) => {
      try {
        return await postOauthKakao(accessToken, loginType);
      } catch {
        throw new Error('토큰을 백엔드로 전송하는데 실패했습니다.');
      }
    },
  });
};
