import {
  GetVetReviewListRequestParams,
  GetVetReviewListResponse,
  GetVetReviewReportListRequestParams,
  GetVetReviewReportListResponse,
  GetVetReviewReportRequestParams,
  GetVetReviewReportResponse,
  PostVetReviewReportRequestBody,
  PostVetReviewReportResponse,
} from '~/models/review';
import { api } from '../config';

export const getVetReviewList = async (params: GetVetReviewListRequestParams) => {
  return await api.get<GetVetReviewListResponse>('/vet/review/list', params);
};

export const getVetReviewReportList = async (params: GetVetReviewReportListRequestParams) => {
  return await api.get<GetVetReviewReportListResponse>('/vet/review/report/list', params);
};

export const getVetReviewReport = async (params: GetVetReviewReportRequestParams) => {
  return await api.get<GetVetReviewReportResponse>(`/vet/review/report/${params.careReviewId}`);
};

export const postVetReviewReport = async (body: PostVetReviewReportRequestBody) => {
  return await api.post<PostVetReviewReportResponse>('/vet/review/report');
};
