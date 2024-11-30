export const STEPS = {
  USER_INFO: 'user-info',
  SEARCH_ADDRESS: 'search-address',
  PET_INFO: 'pet-info',
} as const;

export const PET_GENDER = [
  { value: 'MALE', label: '남아' },
  { value: 'FEMALE', label: '여아' },
];

export const PET_IS_NEUTERED = [
  { value: 'true', label: '했어요' },
  { value: 'false', label: '안했어요' },
];

export const PET_WEIGHT = [
  {
    value: 'SMALL',
    label: '소형견',
    description: '7kg 이하',
  },
  {
    value: 'MEDIUM',
    label: '중형견',
    description: '7kg 초과 ~ 15kg 이하',
  },
  {
    value: 'LARGE',
    label: '대형견',
    description: '15kg 초과',
  },
];

export const BIRTH_YEAR_OPTIONS = Array.from({ length: 30 }, (_, index) => ({
  value: `${new Date().getFullYear() - index}`,
  label: `${new Date().getFullYear() - index}`,
}));
