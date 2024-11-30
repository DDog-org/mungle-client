import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 3px;
  margin-bottom: 4px;
`;

export const profile = css`
  display: flex;
  flex-direction: column;
`;

export const imageUrl = css`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

export const petName = css`
  width: 100%;
  text-align: center;
  margin-top: 10px;
`;

export const detail = css`
  display: flex;
  flex-direction: row;
  gap: 24px;
  border-left: 2px solid #84dacf;
  padding-left: 12px;
`;

export const labelWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const valueWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const detailButton = css`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 3px;
  &:hover {
    text-decoration: underline;
  }
`;
