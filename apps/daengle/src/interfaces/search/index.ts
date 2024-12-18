export interface GroomerSearchItem {
  page: number;
  size: number;
  totalElements: number;
  result: Result[];
}
export interface Result {
  partnerId: number;
  partnerName: string;
  partnerImage: string;
  groomingBadges: string[];
}
