import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = ({ isSelected }: { isSelected: boolean }) => css`
  ${isSelected
    ? css`
        border: 1px solid ${theme.colors.black};

        background: ${theme.colors.black};
        color: ${theme.colors.white} !important;
      `
    : css`
        border: 1px solid ${theme.colors.gray200};

        background: ${theme.colors.white};
        color: ${theme.colors.gray600} !important;
      `}
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  padding: 7px 18px;
  border-radius: 30px;
  ${theme.typo.body9};
`;
