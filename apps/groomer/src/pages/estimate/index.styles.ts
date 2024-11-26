import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 852px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`;

export const sectionDivider = css`
  width: 100%;
  height: 8px;
  background-color: #f6f6f6;
  display: block;
  margin: 0;
`;

export const backButton = css`
  font-size: 16px;
  color: #000;
  margin: 20px 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const requestTitle = css`
  padding: 24px 18px;
  font-size: 16px;
  font-weight: 600;
`;
