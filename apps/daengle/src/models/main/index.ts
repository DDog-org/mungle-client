export interface GetUserShopsResponse {
  allShops: GetAllShops[];
}

export interface GetAllShops {
  shopId: number;
  shopName: string;
  shopAddress: string;
  shopImage: string;
  startTime: string;
  endTime: string;
}

export interface GetUserVetsResponse {
  allVets: GetAllVets[];
}

export interface GetAllVets {
  vetAccountId: number;
  vetName: string;
  vetAddress: string;
  vetImage: string;
  startTime: string;
  endTime: string;
}
