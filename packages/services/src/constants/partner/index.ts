export const DAY_OFF: { id: number; value: string; label: string }[] = [
  {
    id: 1,
    value: 'MONDAY',
    label: '월',
  },
  {
    id: 2,
    value: 'TUESDAY',
    label: '화',
  },
  {
    id: 3,
    value: 'WEDNESDAY',
    label: '수',
  },
  {
    id: 4,
    value: 'THURSDAY',
    label: '목',
  },
  {
    id: 5,
    value: 'FRIDAY',
    label: '금',
  },

  {
    id: 6,
    value: 'SATURDAY',
    label: '토',
  },
  {
    id: 7,
    value: 'SUNDAY',
    label: '일',
  },
] as const;

export const DAYOFF = {
  MONDAY: '월',
  TUESDAY: '화',
  WEDNESDAY: '수',
  THURSDAY: '목',
  FRIDAY: '금',
  SATURDAY: '토',
  SUNDAY: '일',
} as const;
