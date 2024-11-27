import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background-color: #f3f5f8;
`;

export const headerContainer = css`
  font-size: 24px;
  font-weight: 600;
  padding: 18px 34px;
  margin-top: 4px;
`;

export const tabContainer = css`
  display: flex;
  padding: 18px 18px 0px 18px;
  position: relative;
  border-bottom: 0.5px solid #e6e6e6;
`;

export const tab = css`
  font-size: 16px;
  width: 100%;
  padding: 9px 32px;
  border: none;
  background: none;
  color: #d9d9d9;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const activeTab = css`
  color: #000000;
  font-weight: 600;
  border-bottom: 2px solid #000000;
`;

export const userProfileContainer = css`
  display: flex;
  gap: 8px;
  margin: 18px;
`;

export const profileButton = css`
  padding: 4px 14px 4px 4px;
  border-radius: 28px;
  border: 1px solid #e6e6e6;
  background-color: #e6e6e6;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  &:not(.selectedProfile) {
    color: #979797;
  }
`;

export const selectedProfile = css`
  && {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const optionContainer = css`
  display: flex;
  margin-bottom: 18px;
`;

export const optionButton = css`
  font-size: 14px;
  padding: 0 22px;
  color: #979797;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    color: #000;
  }

  &:not(:last-of-type) {
    border-right: 1px solid #d9d9d9;
  }

  &.active {
    color: #000;
    font-weight: bold;
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
  background-color: #ffffff;
  margin-right: 16px;
  padding: 12px 12px 12px 24px;
  border-top-right-radius: 65.5px;
  border-bottom-right-radius: 65.5px;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;
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
`;

export const name = css`
  font-size: 16px;
`;

export const getDistanceColor = (distanceValue: number) => css`
  background-color: ${distanceValue < 50 ? '#ffe3e3' : distanceValue < 80 ? '#fffcf3' : '#dde6ff'};
  color: ${distanceValue < 50 ? '#ff6767' : distanceValue < 80 ? '#ffc748' : '#5d86fe'};
  padding: 5px 8px;
  border-radius: 30px;
  font-size: 9px;
  font-weight: 600;
`;

export const cardContent = css`
  margin-top: 4px;
  color: #bebebe;
  font-size: 12px;
`;

export const tags = css`
  display: flex;
  gap: 6px;
`;

export const tagButton = css`
  background-color: transparent;
  color: #5d86fe;
  padding: 5px 16px;
  border: 1px solid #5d86fe;
  border-radius: 14px;
  font-size: 10px;
  cursor: pointer;
`;
