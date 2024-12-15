import { UserReservationCareList, UserReservationGroomingList } from '~/interfaces/reservation';

export interface GetUserReservationGroomingListResponse {
  contents: UserReservationGroomingList[];
}

export interface GetUserReservationCareListResponse {
  contents: UserReservationCareList[];
}
