import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  margin-bottom: 12px;
  padding: 20px 24px;

  background-color: ${theme.colors.white};

  cursor: pointer;
  border-top-right-radius: 65.6px;
  border-bottom-right-radius: 65.6px;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
`;

export const detailContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const cardHeader = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const profileImage = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;

  background-color: ${theme.colors.gray200};
`;

export const type = css`
  padding: 3px 10px;
  border-radius: 14.03px;
  ${theme.typo.body2};
`;

export const general = css`
  border: ${theme.colors.green200} solid 0.5px;

  background-color: ${theme.colors.green100};
  color: ${theme.colors.green200};
`;

export const designated = css`
  border: ${theme.colors.yellow200} solid 0.5px;

  background-color: ${theme.colors.yellow100};
  color: ${theme.colors.yellow200};
`;

export const specials = css`
  ${theme.typo.subtitle1};
  margin: 0;
`;

export const specialsNot = css`
  ${theme.typo.body4};
  color: ${theme.colors.gray400};
`;
