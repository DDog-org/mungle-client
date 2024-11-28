import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #f3f5f8;
`;

export const headerContainer = css`
  padding: 18px 34px;
  margin-top: 4px;
`;

export const tabContainer = css`
  display: flex;
  padding: 18px 18px 0px 18px;
  border-bottom: 0.5px solid ${theme.colors.gray200};
`;

export const tabButton = css`
  ${theme.typo.subtitle1};
  width: 100%;
  padding: 9px 32px;
  justify-content: center;
  background: none;
  color: ${theme.colors.gray500};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.black};
  }
`;

export const activeTabButton = css`
  color: ${theme.colors.black};
  font-weight: 600;
  border-bottom: 2px solid ${theme.colors.black};
`;

export const profileContainer = css`
  display: flex;
  gap: 8px;
  margin: 18px;

  button {
    ${theme.typo.body4};
    color: ${theme.colors.gray500};
  }
`;

export const profileButton = css`
  padding: 4px 14px 4px 4px;
  border-radius: 28px;
  border: 1px solid ${theme.colors.gray200};
  background-color: ${theme.colors.gray200};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.gray500};

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const selectedProfileButton = css`
  && {
    background-color: ${theme.colors.black};
    ${theme.typo.body4};
    color: ${theme.colors.white};
  }
`;

export const optionContainer = css`
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

export const listContainer = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const card = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  margin-right: 16px;
  padding: 12px 12px 12px 24px;
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
  cursor: pointer;
`;

export const nameStyle = css`
  font-size: 16px;
`;

export const distanceStyle = (distanceValue: number) => css`
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
  padding: 5px 8px;
  border-radius: 30px;
  font-size: 9px;
  font-weight: 600;
`;

export const cardContent = css`
  margin-top: 4px;
  color: ${theme.colors.gray400};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const tagsContainer = css`
  display: flex;
  margin-top: 5px;
  gap: 6px;
`;

export const tagButtonStyle = css`
  background-color: transparent;
  color: ${theme.colors.blue200};
  padding: 5px 16px;
  border: 1px solid ${theme.colors.blue200};
  border-radius: 14px;
  font-size: 10px;
  cursor: pointer;
`;

export const emptyStateWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  gap: 15px;
`;

export const emptyText = css`
  ${theme.typo.subtitle3};
  color: ${theme.colors.gray400};
`;

export const emptyButton = css`
  margin-top: 20px;
  border-radius: 29.5px;
  cursor: pointer;
  text-align: center;
  ${theme.typo.body4};
`;
