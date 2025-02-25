export const ROUTES = {
  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  ONBOARDING_USER_INFO: '/onboarding?step=user-info',
  ONBOARDING_SEARCH_ADDRESS: '/onboarding?step=search-address',
  ONBOARDING_PET_INFO: '/onboarding?step=pet-info',
  TERMS_OF_USE: '/login/terms',

  HOME: '/',
  SEARCH: '/search',
  SEARCH_RESULT: (keyword: string) => `/search?keyword=${keyword}`,
  SEARCH_ADDRESS: '/search-address',

  // Estimates
  ESTIMATES: '/estimates',
  ESTIMATES_DETAIL: (estimateId: number) => `/estimates/${estimateId}`,
  ESTIMATES_GROOMING: (groomerId?: number) =>
    groomerId ? `/estimates/grooming/${groomerId}` : `/estimates/grooming`,
  ESTIMATES_VET: (vetId?: number) => (vetId ? `/estimates/care/${vetId}` : `/estimates/care`),
  ESTIMATES_FORM_COMPLETE: '/estimates/complete',
  ESTIMATES_REQUEST: (estimateId: number) => `estimates/request/${estimateId}`,

  // Groomers
  GROOMERS_SHOPS_DETAIL: (shopId: number) => `/shops/${shopId}`,
  GROOMERS_DETAIL: (groomerId: number) => `/groomers/${groomerId}`,
  GROOMERS_REVIEWS: (groomerId: number) => `/groomers/${groomerId}/reviews`,

  GROOMERS_ESTIMATE_FORM: '/groomers/estimate-form',
  GROOMERS_REVIEW_FORM_EDIT: (reviewId: number) => `/groomers/review/${reviewId}/edit`,
  GROOMERS_PORFOLIO: (groomerId: number) => `/groomers/${groomerId}/porfolio`,

  // Vets
  VETS_DETAIL: (vetId: number) => `/vets/${vetId}`,
  VETS_REVIEWS: (vetId: number) => `/vets/${vetId}/reviews`,
  VETS_ESTIMATE_FORM: '/vets/estimate-form',
  VETS_REVIEW_FORM_EDIT: (reviewId: number) => `/vet/review/${reviewId}/edit`,

  // Reviews
  REVIEWS_FORM: (reservationId: number) => `/reviews/${reservationId}/form`,

  // Reservations
  RESERVATIONS: '/reservations',
  RESERVATIONS_DETAIL: (estimateId: number) => `/reservations/${estimateId}`,

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
