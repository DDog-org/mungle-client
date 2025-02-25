export interface GetGroomerScheduleResponse {
  totalScheduleCount: number;
  designationCount: number;
  totalReservationCount: number;
  todayAllReservations: GroomerScheduleReservation[];
}

export interface GroomerScheduleReservation {
  estimateId: number;
  reservationId: number;
  petId: number;
  petImage: string | null;
  petName: string;
  desiredStyle: string;
  reservationTime: string;
}
