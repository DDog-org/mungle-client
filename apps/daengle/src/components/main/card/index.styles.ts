import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 153px;

  border-bottom: 1px solid ${theme.colors.gray200};

  cursor: pointer;
`;

export const imageStyle = css`
  border-radius: 86px 86px 0 0;

  background-color: ${theme.colors.gray200};
`;

export const textBox = css`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
`;

export const addressStyle = css`
  margin: 6px 0 19px;
`;
