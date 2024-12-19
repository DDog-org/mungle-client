import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  padding: 15px 0;

  cursor: pointer;

  & + & {
    border-top: 1px solid ${theme.colors.gray200};
  }
`;

export const imageStyle = css`
  border-radius: 86px 86px 0 0;
  object-fit: cover;

  background-color: ${theme.colors.gray200};
`;

export const textBox = css`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

export const addressStyle = css`
  margin: 4px 0 12px;
`;
