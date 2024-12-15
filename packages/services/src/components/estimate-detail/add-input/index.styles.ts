import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const addTitle = css`
  padding: 24px 18px 14px;
`;

export const inputSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 8px;
  padding: 0 18px;
`;

export const textarea = css`
  width: 100%;
  min-height: 80px;
  padding: 18px;
  ${theme.typo.body4}
  border-radius: 10px;

  background-color: #f0f0f0;

  resize: none;
  outline: none;
`;
