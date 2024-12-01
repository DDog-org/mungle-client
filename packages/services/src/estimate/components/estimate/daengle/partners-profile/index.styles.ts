import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  gap: 15px;
  margin: 6px 18px;
`;

export const profileImage = css`
  border-radius: 50%;
  object-fit: cover;
`;

export const details = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const tags = css`
  display: flex;
  gap: 6px;
  margin-top: 6px;
`;

export const tag = css`
  background-color: transparent;
  padding: 5px 17px;
  border-radius: 14px;
  border: 0.5px solid ${theme.colors.blue200};
`;
