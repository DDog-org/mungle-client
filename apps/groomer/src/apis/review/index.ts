import {
  GetGroomerReviewListRequestParams,
  GetGroomerReviewListResponse,
  GetGroomerReviewReportListRequestParams,
  GetGroomerReviewReportListResponse,
} from '~/models';
import { api } from '../config';

export const getGroomerReviewList = async (params: GetGroomerReviewListRequestParams) => {
  return await api.get<GetGroomerReviewListResponse>('/groomer/review/list', params);
};

export const getGroomerReviewReportList = async (
  params: GetGroomerReviewReportListRequestParams
) => {
  return await api.get<GetGroomerReviewReportListResponse>('/groomer/review/report/list', params);
};
