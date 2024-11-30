import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const addTitle = css`
  padding: 24px 18px 14px;
`;

export const inputSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 18px;
  margin-bottom: 14px;
`;

export const textarea = css`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  ${theme.typo.body4}
  background-color: #f0f0f0;
  border-radius: 10px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 3px rgba(37, 99, 235, 0.5);
  }
`;
