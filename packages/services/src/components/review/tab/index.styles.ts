import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 18px 0 18px;
  border-bottom: 0.5px solid ${theme.colors.gray300};
`;

export const tabButton = css`
  padding: 9px 30px;
  ${theme.typo.subtitle3};
  color: ${theme.colors.gray300};
  cursor: pointer;
  border: none;
  background: none;

  &:hover {
    color: ${theme.colors.black100};
  }
`;

export const activeTabButton = css`
  color: ${theme.colors.black100};
  ${theme.typo.subtitle1};
  border-bottom: 2px solid ${theme.colors.black100};
`;
