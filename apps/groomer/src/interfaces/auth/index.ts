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
  image: string | null;
  introduction: string | null;
  licenses: license[];
}
export interface license {
  name: string;
  acquisitionDate: string;
}
