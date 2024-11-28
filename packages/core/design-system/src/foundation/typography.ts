import { css } from '@emotion/react';

// TODO: 변수명 변경
const typography = {
  title1: css`
    font-weight: 600;
    font-size: 24px;
  `,
  title2: css`
    font-weight: 600;
    font-size: 20px;
  `,

  subtitle1: css`
    font-weight: 600;
    font-size: 16px;
  `,
  subtitle2: css`
    font-weight: 600;
    font-size: 15px;
  `,
  subtitle3: css`
    font-weight: 500;
    font-size: 16px;
  `,

  body1: css`
    font-weight: 600;
    font-size: 14px;
  `,
  body2: css`
    font-weight: 600;
    font-size: 9px;
  `,
  body3: css`
    font-weight: 500;
    font-size: 18px;
  `,
  body4: css`
    font-weight: 500;
    font-size: 14px;
  `,
  body5: css`
    font-weight: 500;
    font-size: 12px;
  `,
  body6: css`
    font-weight: 500;
    font-size: 11px;
  `,
  body7: css`
    font-weight: 500;
    font-size: 10px;
  `,
  body8: css`
    font-weight: 400;
    font-size: 16px;
  `,
  body9: css`
    font-weight: 400;
    font-size: 14px;
  `,
  body10: css`
    font-weight: 400;
    font-size: 13px;
  `,
  body11: css`
    font-weight: 400;
    font-size: 12px;
  `,
  body12: css`
    font-weight: 400;
    font-size: 10px;
  `,
} as const;

export default typography;
