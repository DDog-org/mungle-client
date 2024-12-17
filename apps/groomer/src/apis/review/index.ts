import {
  GetGroomerReviewListRequestParams,
  GetGroomerReviewListResponse,
  GetGroomerReviewReportListRequestParams,
  GetGroomerReviewReportListResponse,
  GetGroomerReviewReportRequestParams,
  GetGroomerReviewReportResponse,
  PostGroomerReviewReportRequestBody,
  PostGroomerReviewReportResponse,
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

export const getGroomerReviewReport = async (params: GetGroomerReviewReportRequestParams) => {
  return await api.get<GetGroomerReviewReportResponse>(
    `/groomer/review/report/${params.groomingReviewId}`
  );
};

export const postGroomerReviewReport = async (body: PostGroomerReviewReportRequestBody) => {
  return await api.post<PostGroomerReviewReportResponse>('/groomer/review/report');
};
