export const BIRTH_YEAR_OPTIONS = Array.from({ length: 30 }, (_, index) => ({
  value: `${new Date().getFullYear() - index}`,
  label: `${new Date().getFullYear() - index}`,
}));

export const PET_GENDER = [
  { value: 'MALE', label: '남아' },
  { value: 'FEMALE', label: '여아' },
] as const;

export const PET_IS_NEUTERED = [
  { value: 'true', label: '했어요' },
  { value: 'false', label: '안했어요' },
] as const;

export const PET_EXPERIENCE = [
  { value: 'true', label: '있어요' },
  { value: 'false', label: '없어요' },
] as const;

export const PET_DISLIKEPART: { value: string; label: string }[] = [
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
    value: 'EAR',
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
] as const;

export const PET_SIGNIFICANTTAG: { value: string; label: string }[] = [
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
] as const;
