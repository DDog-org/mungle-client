import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  overflow-y: scroll;

  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export const bottom = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 18px;

  background: pink;
`;
