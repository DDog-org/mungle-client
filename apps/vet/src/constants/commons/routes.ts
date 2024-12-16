export const ROUTES = {
  HOME: '/',

  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  ONBOARDING_SEARCH_ADDRESS: '/onboarding/search-address',
  ONBOARDING_PENDING: '/onboarding/pending',

  // Estimates
  ESTIMATES: '/estimates',
  ESTIMATE_DETAIL: (estimateId: number) => `/estimates/${estimateId}`,
  ESTIMATE_PETINFO: (petId: number) => `/estimates/pet-info/${petId}`,
  ESTIMATE_COMPLELTE: '/estimates/complete',

  // Reservations
  RESERVATIONS: '/reservations',
  RESERVATIONS_DETAIL: (reservationId: number) => `/reservations/${reservationId}`,

  // Chats
  CHATS: '/chats',

  // Mypage
  MYPAGE: '/mypage',
  MYPAGE_EDIT: '/mypage/edit',
  MYPAGE_REVIEWS_REPORT: (reviewId: number) => `/mypage/reviews/report/${reviewId}`,
} as const;
