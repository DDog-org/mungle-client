import { css } from '@emotion/react';

// TODO: 변수명 변경
const typography = {
  semibold01: css`
    font-weight: 600;
    font-size: 24px;
  `,
  semibold02: css`
    font-weight: 600;
    font-size: 20px;
  `,
  semibold03: css`
    font-weight: 600;
    font-size: 16px;
  `,
  semibold04: css`
    font-weight: 600;
    font-size: 15px;
  `,
  semibold05: css`
    font-weight: 600;
    font-size: 14px;
  `,
  semibold06: css`
    font-weight: 600;
    font-size: 10px;
  `,

  medium01: css`
    font-weight: 500;
    font-size: 16px;
  `,
  medium02: css`
    font-weight: 500;
    font-size: 14px;
  `,
  medium03: css`
    font-weight: 500;
    font-size: 12px;
  `,
  medium04: css`
    font-weight: 500;
    font-size: 10px;
  `,

  regular01: css`
    font-weight: 400;
    font-size: 16px;
  `,
  regular02: css`
    font-weight: 400;
    font-size: 14px;
  `,
  regular03: css`
    font-weight: 400;
    font-size: 13px;
  `,
  regular04: css`
    font-weight: 400;
    font-size: 12px;
  `,
  regular05: css`
    font-weight: 400;
    font-size: 10px;
  `,
} as const;

export default typography;
