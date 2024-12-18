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
  introduction: string | null;
  licenses: License[];
  instagramId: string;
}

export interface License {
  name: string;
  acquisitionDate: string;
}
