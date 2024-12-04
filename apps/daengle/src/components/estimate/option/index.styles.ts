import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  margin-bottom: 18px;
  padding: 0 22px;
  gap: 12px;

  button:hover span {
    color: ${theme.colors.black100};
  }

  button:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 100%;
    background-color: ${theme.colors.gray300};
  }
`;
