import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const card = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 16px;
  padding: 12px 12px 12px 24px;

  background-color: ${theme.colors.white};
  border-top-right-radius: 65.5px;
  border-bottom-right-radius: 65.5px;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  cursor: pointer;
`;

export const cardHeader = css`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const profileImage = css`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  object-fit: cover;

  background-color: ${theme.colors.gray200};

  cursor: pointer;
`;

export const nameStyle = css`
  font-size: 16px;
`;

export const distanceStyle = (distanceValue: number) => css`
  padding: 5px 8px;
  border-radius: 30px;

  background-color: ${distanceValue < 50
    ? theme.colors.red100
    : distanceValue < 80
      ? theme.colors.yellow100
      : theme.colors.blue100};
  color: ${distanceValue < 50
    ? theme.colors.red200
    : distanceValue < 80
      ? theme.colors.yellow200
      : theme.colors.blue200};
  font-size: 9px;
  font-weight: 600;
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin-top: 4px;

  color: ${theme.colors.gray400};
  font-size: 12px;
`;

export const tagsContainer = css`
  display: flex;
  gap: 6px;

  margin-top: 5px;
`;

export const tagButtonStyle = css`
  padding: 5px 16px;
  border: 1px solid ${theme.colors.blue200};
  border-radius: 14px;

  background-color: transparent;
  ${theme.typo.body12};
  color: ${theme.colors.blue200};

  cursor: pointer;
`;
