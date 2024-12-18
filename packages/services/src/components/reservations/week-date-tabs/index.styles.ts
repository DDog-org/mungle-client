import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 16px 18px 0;
  border-bottom: 1px solid ${theme.colors.gray300};
  box-sizing: border-box;
`;

export const dateTabs = css`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;
`;

export const dateTab = (isActive: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 19px;
  border-bottom: ${isActive ? `2px solid ${theme.colors.green200}` : 'none'};

  cursor: pointer;
`;

export const gap = css`
  padding: 4px;
`;
