import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 18px;
  border-bottom: 0.5px solid ${theme.colors.gray300};
`;

export const tabButton = css`
  padding: 9px 30px;
  border: none;
  ${theme.typo.subtitle3};
  background: none;
  color: ${theme.colors.gray300};

  cursor: pointer;

  &:hover {
    color: ${theme.colors.black100};
  }
`;

export const activeTabButton = css`
  color: ${theme.colors.black100};
  ${theme.typo.subtitle1};
  border-bottom: 2px solid ${theme.colors.black100};
`;
