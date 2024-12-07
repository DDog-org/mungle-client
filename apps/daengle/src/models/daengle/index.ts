export interface postVetUserInfoBody {
  vetId: number;
}

export interface postVetUserInfoResponse {
  vetImage: string | null;
  vetName: string;
  address: string;
  petInfos: petInfos[];
}

export interface petInfos {
  petId: number;
  image: string | null;
  name: string;
}

export interface postCareBody {
  vetId: number;
  petId: number;
  address: string;
  reservedDate: string;
  symptoms: string;
  requirements: string;
}

export interface postCareResponse {
  requestResult: string;
}
