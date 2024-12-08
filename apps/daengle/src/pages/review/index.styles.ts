import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  flex-direction: column;

  background-color: ${theme.colors.background};
`;

export const header = css`
  margin-bottom: 6px;
  padding: 18px;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 0 18px;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  padding: 18px;
  border-radius: 21px;

  background-color: ${theme.colors.white};
`;

export const schedule = css`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;
`;

export const date = css`
  display: flex;
  gap: 11px;
`;

export const stars = css`
  margin: 13px 0 3px;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const keyword = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-top: 14px;
`;

export const unroll = css`
  display: flex;
  justify-content: center;

  width: 100%;
  padding-top: 18px;

  cursor: pointer;
`;

export const reviewImage = css`
  margin-top: 14px;
`;

export const reviewInput = css`
  margin-top: 15px;
`;

export const textarea = css`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  ${theme.typo.body10};
  resize: none;
  outline: none;
`;

export const textCount = css`
  display: flex;
  justify-content: flex-end;

  margin-top: 4px;

  color: ${theme.colors.gray500};
  ${theme.typo.body11};
`;
export const submitButton = css`
  margin-top: 14px;
  padding: 18px;
`;
