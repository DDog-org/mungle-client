export interface getUserPetsInfoResponse {
  userImage: string;
  nickname: string;
  address: string;
  petInfos: petInfos[];
}

export interface petInfos {
  id: number;
  image: string;
  name: string;
  significant: string;
  birth: number;
  weight: string;
}
