export const ROUTES = {
  HOME: '/',

  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  ONBOARDING_SEARCH_ADDRESS: '/onboarding/search-address',
  ONBOARDING_PENDING: '/onboarding/pending',

  // Estimates
  ESTIMATES: '/estimates',
  ESTIMATE_DETAIL: (estimateId: number) => `/estimates/${estimateId}`,
  ESTIMATE_COMPLELTE: '/estimates/complete',

  // Reservations
  RESERVATIONS: '/reservations',
  RESERVATIONS_DETAIL: (reservationId: number) => `/reservations/${reservationId}`,

  // Chats
  CHATS: '/chats',
  CHATS_DETAIL: (roomId: number) => `/chats/${roomId}`,

  // Mypage
  MYPAGE: '/mypage',
  MYPAGE_REVIEWS: '/mypage/reviews',
  MYPAGE_PROFILE: '/mypage/profile',
  MYPAGE_MY_SHOP: '/mypage/my-shop',
  MYPAGE_REVIEWS_REPORT: '/mypage/reviews/report',
} as const;
