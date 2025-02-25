import { PET_SIZE } from '@daengle/services/constants';
import { GetGroomerWeekList } from '~/interfaces/reservation';

export interface GetGroomerWeekRequestParams {
  date: string | undefined;
}

export interface GetGroomerWeekResponse {
  scheduleDate: string;
  scheduleList: GetGroomerWeekList[];
}

export interface GetGroomerPetInfoRequestParams {
  petId: number;
}

export interface GetGroomerPetInfoResponse {
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

export interface GetGroomerReservationRequestParams {
  reservationId: number;
}

export interface GetGroomerReservationResponse {
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
  desiredStyle: string;
  requirements: string;
  overallOpinion: string;
}
