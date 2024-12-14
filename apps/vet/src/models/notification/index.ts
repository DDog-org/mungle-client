export interface GetVetScheduleResponse {
  totalScheduleCount: number;
  designationCount: number;
  totalReservationCount: number;
  todayAllReservations: VetScheduleReservation[];
}

export interface VetScheduleReservation {
  reservationId: number;
  petId: number;
  petImage: string | null;
  petName: string;
  desiredStyle: string;
  reservationTime: string;
}
