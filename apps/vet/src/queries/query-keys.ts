const AUTH_QUERY_KEYS = {
  POST_KAKAO: ['POST_KAKAO'],
  POST_VET_JOIN: ['POST_VET_JOIN'],
  GET_VET_MODIFY_PAGE: ['GET_VET_MODIFY_PAGE'],
  PATCH_VET_MODIFY_PAGE: ['PATCH_VET_MODIFY_PAGE'],
  GET_VET_VALIDATE: ['GET_VET_VALIDATE'],
  GET_VET_INFO: ['GET_VET_INFO'],
};

const ESTIMATE_QUERY_KEYS = {
  GET_VET_ESTIMATE_GENERAL_LIST: ['GET_VET_ESTIMATE_GENERAL_LIST'],
  GET_VET_ESTIMATE_DESIGNATION_LIST: ['GET_VET_ESTIMATE_DESIGNATION_LIST'],
  GET_VET_ESTIMATES_DETAIL: ['GET_VET_ESTIMATES_DETAIL'],
  POST_VET_ESTIMATE: ['POST_VET_ESTIMATE'],
};

const NOTIFICATION_QUERY_KEYS = {
  GET_VET_SCHEDULE: ['GET_VET_SCHEDULE'],
};

const CHAT_QUERY_KEYS = {
  GET_CHAT_WITH: ['GET_CHAT_WITH'],
  POST_CHAT_MESSAGES: ['POST_CHAT_MESSAGES'],
  DELETE_CHAT_DELETE: ['DELETE_CHAT_DELETE'],
  GET_CHAT_VET_LIST: ['GET_CHAT_VET_LIST'],
};

const REVIEW_QUERY_KEYS = {
  GET_VET_REVIEW_LIST: ['GET_VET_REVIEW_LIST'],
  GET_VET_REVIEW_REPORT_LIST: ['GET_VET_REVIEW_REPORT_LIST'],
  GET_VET_REVIEW_REPORT: ['GET_VET_REVIEW_REPORT'],
  POST_VET_REVIEW_REPORT: ['POST_VET_REVIEW_REPORT'],
};

export const QUERY_KEYS = {
  ...AUTH_QUERY_KEYS,
  ...ESTIMATE_QUERY_KEYS,
  ...NOTIFICATION_QUERY_KEYS,
  ...CHAT_QUERY_KEYS,
  ...REVIEW_QUERY_KEYS,
};
