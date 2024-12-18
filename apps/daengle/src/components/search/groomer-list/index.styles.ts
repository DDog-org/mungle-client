import { css } from '@emotion/react';

export const wrapper = css`
  padding-bottom: 120px;
`;

export const tag = css`
  display: flex;
  gap: 6px;

  padding: 14px 18px 24px;
`;

export const itemBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  padding: 0 18px;
`;
export const cardBox = css`
  flex-wrap: wrap;
`;

export const emptyBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: 50%;
`;
export const bottom = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 18px;
`;
