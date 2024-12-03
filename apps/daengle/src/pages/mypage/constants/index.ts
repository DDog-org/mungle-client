import { label } from 'node_modules/@daengle/design-system/src/components/input/index.styles';
import { DislikePart, SignificantTag } from '../interfaces';

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

export const PET_DISLIKEPART: { value: DislikePart; label: string }[] = [
  {
    value: 'NONE',
    label: '없음',
  },
  {
    value: 'EYE',
    label: '눈',
  },
  {
    value: 'NOSE',
    label: '코',
  },
  {
    value: 'MOUTH',
    label: '입',
  },
  {
    value: 'EAT',
    label: '귀',
  },

  {
    value: 'NECK',
    label: '목',
  },
  {
    value: 'BODY',
    label: '몸통',
  },
  {
    value: 'LEG',
    label: '다리',
  },
  {
    value: 'TAIL',
    label: '꼬리',
  },
  {
    value: 'GENITAL',
    label: '생식기',
  },
];
export const PET_SIGNIFICANTTAG: { value: SignificantTag; label: string }[] = [
  {
    value: 'SKIN_DISEASES',
    label: '피부병',
  },
  {
    value: 'HEART_DISEASE',
    label: '심장질환',
  },
  {
    value: 'MARKING',
    label: '마킹',
  },
  {
    value: 'MOUNTING',
    label: '마운팅',
  },
];

export const BIRTH_YEAR_OPTIONS = Array.from({ length: 30 }, (_, index) => ({
  value: `${new Date().getFullYear() - index}`,
  label: `${new Date().getFullYear() - index}`,
}));
