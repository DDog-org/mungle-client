import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const tabContainer = css`
  display: flex;
  padding: 18px 18px 0px 18px;
  position: relative;
  border-bottom: 0.5px solid #e6e6e6;
`;

export const tab = css`
  ${theme.typo.subtitle3};
  width: 100%;
  justify-content: center;
  padding: 9px 32px;
  border: none;
  background: none;
  color: ${theme.colors.gray300};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.black100};
  }
`;

export const activeTab = css`
  color: ${theme.colors.black100};
  ${theme.typo.subtitle1}
  border-bottom: 2px solid ${theme.colors.black100};
`;
