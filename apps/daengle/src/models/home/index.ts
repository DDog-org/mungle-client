export interface GetUserShopsResponse {
  allShops: GetAllShops[];
  allVets: null;
  totalPages: number;
  totalElements: number;
  currentPage: number;
  userAddress: string;
}

export interface GetAllShops {
  shopId: number;
  shopName: string;
  shopAddress: string;
  shopImage: string;
  startTime: string;
  endTime: string;
  closedDay: string[];
}

export interface GetUserVetsResponse {
  allShops: null;
  allVets: GetAllVets[];
  totalPages: number;
  totalElements: number;
  currentPage: number;
  userAddress: string;
}

export interface GetAllVets {
  vetAccountId: number;
  vetName: string;
  vetAddress: string;
  vetImage: string;
  startTime: string;
  endTime: string;
  closedDay: string[];
}

export interface GetUserShopsParams {
  page?: number;
  size?: number;
  address?: string;
}

export interface GetUserVetsParams {
  page?: number;
  size?: number;
  address?: string;
}
