import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 16px 18px 0;
  border-bottom: 0.5px solid ${theme.colors.gray300};
`;

export const tabButton = css`
  padding: 9px 30px;
  border: none;

  background: none;
  ${theme.typo.subtitle3};
  border: none;

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
