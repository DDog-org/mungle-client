import { css } from '@emotion/react';
import { theme } from '../../../foundation';

export const wrapper = css`
  display: flex;
  align-items: center;
  gap: 4px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: ${theme.size.maxWidth};
  margin: 0 auto;
  padding: 20px 18px;

  background: white;
  box-shadow: 0 -4px 10px 0 rgb(0 0 0 / 5%);
`;

export const inputWrapper = css`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 8px 8px 8px 18px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 21px;
`;

export const input = css`
  width: 100%;
  height: 100%;
  ${theme.typo.body12};

  ::placeholder {
    color: ${theme.colors.gray200};
  }
`;
