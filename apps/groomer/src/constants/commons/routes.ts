export const ROUTES = {
  HOME: '/',

  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  ONBOARDING_SEARCH_ADDRESS: '/onboarding/search-address',
  ONBOARDING_PENDING: '/onboarding/pending',

  // Estimates
  ESTIMATES: '/estimates',
  ESTIMATE_DETAIL: (estimateId: number) => `/estimates/${estimateId}`,

  // Reservations
  RESERVATIONS: '/reservations',
  RESERVATIONS_DETAIL: (reservationId: number) => `/reservations/${reservationId}`,

  // Chats
  CHATS: '/chats',

  // Mypage
  MYPAGE: '/mypage',
} as const;
