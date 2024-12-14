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
  licenses: license[];
  instagramId: string;
}
export interface license {
  name: string;
  acquisitionDate: string;
}
