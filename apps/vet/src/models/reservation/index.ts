import { PET_SIZE } from '@daengle/services/constants';
import { GetVetReservationDetail, GetVetWeekList } from '~/interfaces/reservation';

export interface GetVetWeekRequestParams {
  date: string | undefined;
}

export interface GetVetWeekResponse {
  scheduleDate: string;
  scheduleList: GetVetWeekList[];
}

export interface GetVetPetInfoRequestParams {
  petId: number;
}

export interface GetVetPetInfoResponse {
  petId: number;
  image: string;
  name: string;
  birth: string;
  gender: string;
  breed: string;
  isNeutered: boolean;
  weight: keyof typeof PET_SIZE;
  groomingExperience: boolean;
  isBite: boolean;
  dislikeParts: string[];
  significantTags: string[];
  significant: string;
}

export interface GetBreedListResponse {
  breedList: Breed[];
}

export interface Breed {
  breedName: string;
  breed: string;
}

export interface GetVetReservationRequestParams {
  reservationId: number;
}

export interface GetVetReservationResponse {
  userId: number;
  userProfile: string;
  userName: string;
  partnerAddress: string;
  reservedDate: string;
  petId: number;
  petProfile: string;
  petName: string;
  petAge: number;
  petWeight: keyof typeof PET_SIZE;
  dislikeParts: string[];
  significantTags: string[];
  etcSignificants: string;
  petInfo: GetVetReservationDetail;
}
