import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 0;

  cursor: pointer;

  & + & {
    border-top: 1px solid ${theme.colors.gray100};
  }
`;
