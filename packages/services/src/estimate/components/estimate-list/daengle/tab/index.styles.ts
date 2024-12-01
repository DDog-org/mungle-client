import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  padding: 18px 18px 0px 18px;
  border-bottom: 0.5px solid ${theme.colors.gray200};
`;

export const tabButton = css`
  ${theme.typo.subtitle1};
  width: 100%;
  padding: 9px 32px;
  justify-content: center;
  background: none;
  color: ${theme.colors.gray500};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.black};
  }
`;

export const activeTabButton = css`
  color: ${theme.colors.black};
  font-weight: 600;
  border-bottom: 2px solid ${theme.colors.black};
`;
