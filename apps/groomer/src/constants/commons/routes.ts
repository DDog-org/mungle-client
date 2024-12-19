export const ROUTES = {
  HOME: '/',

  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  ONBOARDING_SEARCH_ADDRESS: '/onboarding/search-address',
  ONBOARDING_PENDING: '/onboarding/pending',

  // Estimates
  ESTIMATES: '/estimates',
  ESTIMATES_DETAIL: (estimateId: number) => `/estimates/${estimateId}`,
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
  MYPAGE_SHOP_EDIT: '/mypage/shop/edit',
  MYPAGE_SHOP: (shopId: number) => `/mypage/shop/${shopId}`,
  MYPAGE_REVIEWS_REPORT: (reviewId: number) => `/mypage/reviews/report/${reviewId}`,
} as const;
