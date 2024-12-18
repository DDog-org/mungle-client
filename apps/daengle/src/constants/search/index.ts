export const PAGE_SIZE = 20 as const;

export const GROOMER_SEARCH_TAG: Record<string, string> = {
  OLD_DOG: '#노견',
  LARGE_DOG: '#대형견',
  DANGEROUS_DOG: '#맹견',
  SKIN_DISEASE: '#피부병',
} as const;

export const VET_SEARCH_TAG: Record<string, string> = {
  OLD_DOG: '#노견',
  LARGE_DOG: '#대형견',
  DANGEROUS_DOG: '#맹견',
  SKIN_DISEASE: '#피부병',
  HEART_DISEASE: '#심장질환',
} as const;
