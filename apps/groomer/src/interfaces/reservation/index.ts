export interface GetGroomerWeekList {
  scheduleTime: string;
  reservationId: number;
  petId: number;
  petName: string;
  petProfile: GetGroomerWeekPetProfile[];
  desiredStyle: string;
}

export interface GetGroomerWeekPetProfile {
  petImageUrl: string;
  petName: string;
}
