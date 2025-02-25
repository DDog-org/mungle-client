import { css } from '@emotion/react';

export const wrapper = css`
  padding-bottom: 120px;
`;

export const tag = css`
  display: flex;
  gap: 6px;
  overflow-x: auto;

  max-width: 100%;
  padding: 14px 18px 24px;

  white-space: nowrap;
`;

export const itemBox = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 20px;

  padding: 0 18px;
`;
export const cardBox = css`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
`;

export const emptyBox = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const bottom = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 18px;
`;
