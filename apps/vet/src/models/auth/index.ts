export interface PostVetJoinRequestBody {
  email: string;
  name: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
  licenses: string[];
}

export interface PostVetJoinResponse {
  accessToken: string;
}
