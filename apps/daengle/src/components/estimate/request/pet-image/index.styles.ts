import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
`;

export const image = css`
  margin-bottom: 8px;
  border-radius: 50%;
  object-fit: cover;

  background-color: ${theme.colors.background};
`;

export const name = css`
  width: 86px;

  text-align: center;
`;
