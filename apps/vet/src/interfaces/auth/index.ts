export interface VetInfoForm {
  name: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
  licenses: File[];
  email: string;
}

export interface VetProfileForm {
  imageUrls: File[];
  name: string;
  startTime: string;
  endTime: string;
  closedDays: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
  introduction: string;
}
