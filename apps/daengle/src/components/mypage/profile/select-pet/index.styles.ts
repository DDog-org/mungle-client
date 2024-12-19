import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  gap: 12px;
  overflow-x: scroll;
`;

export const petProfileWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;

export const petItemStyle = ({ isSelected }: { isSelected: boolean }) => css`
  ${isSelected
    ? css`
        img {
          border: 4px solid ${theme.colors.blue200};
        }
      `
    : css`
        img,
        svg {
          border: 4px solid white;
        }
      `}
`;

export const petName = css`
  transition: 0.2s ease;
`;

export const addButton = css`
  display: flex;
`;

export const petProfileAdd = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 0 18px 0 0;

  cursor: pointer;
`;

export const profileImage = css`
  width: 59px;
  height: 59px;
  border-radius: 50px;

  background-color: ${theme.colors.gray200};

  transition: border 0.2s ease;
`;
