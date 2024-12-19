import { PetDislikePart } from '~/interfaces';

export const PET_DISLIKE_PARTS_LABELS = {
  EYE: '눈',
  NOSE: '코',
  MOUTH: '입',
  EAR: '귀',
  NECK: '목',
  BODY: '몸통',
  LEG: '다리',
  TAIL: '꼬리',
  GENITAL: '생식기',
} as const;

export const PET_DISLIKE_PARTS: PetDislikePart[] = [
  {
    value: 'EYE',
    label: PET_DISLIKE_PARTS_LABELS.EYE,
  },
  {
    value: 'NOSE',
    label: PET_DISLIKE_PARTS_LABELS.NOSE,
  },
  {
    value: 'MOUTH',
    label: PET_DISLIKE_PARTS_LABELS.MOUTH,
  },
  {
    value: 'EAR',
    label: PET_DISLIKE_PARTS_LABELS.EAR,
  },

  {
    value: 'NECK',
    label: PET_DISLIKE_PARTS_LABELS.NECK,
  },
  {
    value: 'BODY',
    label: PET_DISLIKE_PARTS_LABELS.BODY,
  },
  {
    value: 'LEG',
    label: PET_DISLIKE_PARTS_LABELS.LEG,
  },
  {
    value: 'TAIL',
    label: PET_DISLIKE_PARTS_LABELS.TAIL,
  },
  {
    value: 'GENITAL',
    label: PET_DISLIKE_PARTS_LABELS.GENITAL,
  },
] as const;

export const PET_SIGNIFICANT_TAGS_LABELS = {
  SKIN_DISEASES: '피부병',
  HEART_DISEASE: '심장질환',
  MARKING: '마킹',
  MOUNTING: '마운팅',
};

export const PET_SIGNIFICANT_TAGS = [
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

export const GROOMING_EXPERIENCE = [
  {
    value: 'true',
    label: '있어요',
  },
  {
    value: 'false',
    label: '없어요',
  },
] as const;

export const IS_BITE = [
  {
    value: 'true',
    label: '있어요',
  },
  {
    value: 'false',
    label: '없어요',
  },
];
