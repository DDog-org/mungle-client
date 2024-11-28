import { api } from '~/apis';
import { PostJoinWithoutPetRequestBody, PostJoinWithoutPetResponse } from '~/models';

export const postJoinWithoutPet = async (body: PostJoinWithoutPetRequestBody) => {
  const response = await api.post<PostJoinWithoutPetResponse>('/join-without-pet', body);
  return response;
};
