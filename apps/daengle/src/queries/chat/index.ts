import { useQuery } from '@tanstack/react-query';
import { getChatUserGroomerList, getChatUserVetList } from '~/apis';
import { QUERY_KEYS } from '../query-keys';

export const useGetChatUserGroomerListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_CHAT_USER_GROOMER_LIST,
    queryFn: getChatUserGroomerList,
  });
};

export const useGetChatUserVetListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_CHAT_USER_VET_LIST,
    queryFn: getChatUserVetList,
  });
};
