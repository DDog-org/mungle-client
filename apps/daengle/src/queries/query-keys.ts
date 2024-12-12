const AUTH_QUERY_KEYS = {
  POST_KAKAO: ['POST_KAKAO'],
  POST_KAKAO_OAUTH: ['POST_KAKAO_OAUTH'],
  POST_OAUTH_KAKAO: ['POST_OAUTH_KAKAO'],
  POST_JOIN_WITHOUT_PET: ['POST_JOIN_WITHOUT_PET'],
  POST_AVAILABLE_NICKNAME: ['POST_AVAILABLE_NICKNAME'],
  GET_BREED_LIST: ['GET_BREED_LIST'],
  POST_JOIN_WITH_PET: ['POST_JOIN_WITH_PET'],
  GET_USER_PET_INFO: ['GET_USER_PET_INFO'],
  POST_USER_PET: ['POST_USER_PET'],
};

const ESTIMATE_QUERY_KEYS = {
  GET_USER_ESTIMATE_LIST: ['GET_USER_ESTIMATE_LIST'],
  POST_ESTIMATE_GROOMER_USER_INFO: [' POST_USER_ESTIMATE_GROOMER_USER_INFO'],
  POST_ESTIMATE_GROOMING: ['POST_USER_ESTIMATE_GROOMING'],
  POST_USER_ESTIMATE_VET_USER_INFO: ['POST_USER_ESTIMATE_VET_USER_INFO'],
  POST_USER_ESTIMATE_CARE: ['POST_USER_ESTIMATE_CARE'],
  GET_USER_PROFILE_INFO: ['GET_USER_PROFILE_INFO'],
  POST_USER_PROFILE_INFO: ['POST_USER_PROFILE_INFO'],
  GET_USER_ESTIMATE_GROOMER_DETAIL: ['GET_USER_ESTIMATE_GROOMER_DETAIL'],
  GET_USER_ESTIMATE_VET_DETAIL: ['GET_USER_ESTIMATE_VET_DETAIL'],
};

const REVIEW_QUERY_KEYS = {
  GET_USER_GROOMING_MY_REVIEW_LIST: ['GET_USER_GROOMING_MY_REVIEW_LIST'],
  GET_USER_CARE_MY_REVIEW_LIST: ['GET_USER_CARE_MY_REVIEW_LIST'],
  DELETE_USER_CARE_REVIEW: ['DELETE_USER_CARE_REVIEW'],
  DELETE_USER_GROOMING_REVIEW: ['DELETE_USER_GROOMING_REVIEW'],
  GET_USER_GROOMER_REVIEW_LIST: ['GET_USER_GROOMER_REVIEW_LIST'],
  GET_USER_VET_REVIEW_LIST: ['GET_USER_VET_REVIEW_LIST'],
};

const PAYMENT_QUERY_KEYS = {
  GET_PAYMENT_GROOMING_HISTORY_LIST: ['GET_PAYMENT_GROOMING_HISTORY_LIST'],
  GET_PAYMENT_CARE_HISTORY_LIST: ['GET_PAYMENT_CARE_HISTORY_LIST'],
  GET_PAYMENT_HISTORY_DETAIL: ['GET_PAYMENT_HISTORY_DETAIL'],
};

export const QUERY_KEYS = {
  ...AUTH_QUERY_KEYS,
  ...ESTIMATE_QUERY_KEYS,
  ...REVIEW_QUERY_KEYS,
  ...PAYMENT_QUERY_KEYS,
} as const;
