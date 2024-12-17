import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90%;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;

  width: 100%;

  text-align: center;
`;

export const text = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const title = css`
  margin: 38px 0 0;
`;

export const subtitle = css`
  margin: 12px 0 47px;
`;
