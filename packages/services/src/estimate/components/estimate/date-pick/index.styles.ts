import { css } from '@emotion/react';

export const datePicker = css`
  width: 100%;
  padding: 12px 18px;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  background-color: #ffffff;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 3px rgba(37, 99, 235, 0.5);
    outline: none;
  }
`;
