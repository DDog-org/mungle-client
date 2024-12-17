import { theme } from '@daengle/design-system';
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

  background-color: ${theme.colors.gray200};
`;

export const petName = css`
  width: 100%;
  margin-top: 10px;

  text-align: center;
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
  gap: 11px;
`;

export const labelItems = css`
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
  margin-top: 3px;
  border: none;

  background: none;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
