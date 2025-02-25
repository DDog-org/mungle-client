export interface GetVetWeekList {
  scheduleTime: string;
  reservationId: number;
  petId: number;
  petName: string;
  petProfile: GetVetWeekPetProfile[];
  desiredStyle: string;
}

export interface GetVetWeekPetProfile {
  petImageUrl: string;
  petName: string;
}

export interface GetVetReservationDetail {
  symptoms: string;
  requirements: string;
  treatment: string;
  cause: string;
  diagnosis: string;
}
