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
  groomingExperience: true;
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
