export interface GroomerInfoForm {
  name: string;
  phoneNumber: string;
  shopName: string;
  address: string;
  detailAddress: string;
  businessLicenses: File[];
  licenses: File[];
  email: string;
}

export interface GroomerModifyPageForm {
  image: File | null;
  introduction: string;
  licenses: License[];
  instagramId: string;
}

export interface License {
  name: string;
  acquisitionDate: string;
}

export interface GroomerProfileForm {
  shopId: number;
  imageUrlList: File[];
  name: string;
  startTime: string;
  endTime: string;
  closedDays: string[];
  phoneNumber: string;
  address: string;
  detailAddress: string;
  introduction: string;
}
