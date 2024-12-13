export const ROUTES = {
  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  ONBOARDING_USER_INFO: '/onboarding?step=user-info',
  ONBOARDING_SEARCH_ADDRESS: '/onboarding?step=search-address',
  ONBOARDING_PET_INFO: '/onboarding?step=pet-info',

  HOME: '/',
  SEARCH: '/search',
  SEARCH_RESULT: (keyword: string) => `/search?keyword=${keyword}`,

  // Estimates
  ESTIMATES: '/estimates',
  ESTIMATE_DETAIL: (estimateId: number) => `/estimates/detail/${estimateId}`,
  ESTIMATE_GROOMING: '/estimates/grooming',
  ESTIMATE_VET: 'estimates/care',
  ESTIMATE_FORM_COMPLETE: '/estimates/complete',

  // Groomers
  GROOMER_DETAIL: (groomerId: number) => `/groomers/${groomerId}`,
  GROOMER_REVIEWS: (groomerId: number) => `/groomers/${groomerId}/reviews`,
  GROOMER_ESTIMATE_FORM: '/groomers/estimate-form',
  GROOMER_REVIEW_FORM_EDIT: (reveiwId: number) => `/groomers/review/${reveiwId}/edit`,

  // Vets
  VET_DETAIL: (vetId: number) => `/vets/${vetId}`,
  VET_REVIEWS: (vetId: number) => `/vets/${vetId}/reviews`,
  VET_ESTIMATE_FORM: '/vets/estimate-form',
  VET_REVIEW_FORM_EDIT: (reviewId: number) => `/vet/review/${reviewId}/edit`,

  // Reviews
  REVIEWS_FORM: (reservationId: number) => `/reviews/${reservationId}/form`,

  // Reservations
  RESERVATIONS: '/reservations',

  // Chat
  CHATS: '/chats',
  CHATS_DETAIL: (chatId: number) => `/chats/${chatId}`,

  //Payments
  PAYMENTS: '/payments',
  PAYMENTS_ORDER: '/payments/order',
  PAYMENTS_VALIDATE: '/payments/validate',
  PAYMENTS_COMPLETE: '/payments/complete',

  // Mypage
  MYPAGE: '/mypage',
  MYPAGE_USER_INFO: '/mypage/user-profile',
  MYPAGE_USER_INFO_EDIT: '/mypage/user-profile/edit',
  MYPAGE_PET_PROFILE: '/mypage/pet-profile',
  MYPAGE_PET_PROFILE_EDIT: '/mypage/pet-profile/edit',
  MYPAGE_PET_PROFILE_CREATE: '/mypage/pet-profile/create',
  MYPAGE_REVIEWS: '/mypage/reviews',
  MYPAGE_FAVORITES: '/mypage/favorites',
  MYPAGE_PAYMENTS: '/mypage/payments',
  MYPAGE_PAYMENTS_DETAIL: (paymentId: number) => `/mypage/payments/${paymentId}`,
} as const;
