export interface GroomerScheduleReservation {
  reservationId: number;
  petId: number;
  petImage: string | null;
  petName: string;
  desiredStyle: string;
  reservationTime: string;
}
