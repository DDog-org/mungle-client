import { css } from '@emotion/react';

export const card = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 20px 24px;
  margin-bottom: 12px;
  background-color: #ffffff;
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
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
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
`;

export const name = css`
  font-size: 14px;
  font-weight: 600;
`;

export const type = css`
  font-size: 9px;
  padding: 2px 7px;
  border-radius: 14.03px;
  font-weight: bold;
`;

export const general = css`
  background-color: #eefffd;
  color: #81d9d0;
  border: #81d9d0 solid 0.5px;
`;

export const designated = css`
  background-color: #fffcf3;
  color: #ffc748;
  border: #ffc748 solid 0.5px;
`;

export const specials = css`
  font-size: 16px;
  color: #000000;
  font-weight: 600;
  margin: 0;
`;

export const specialsNot = css`
  color: #d9d9d9;
`;

export const date = css`
  font-size: 12px;
  color: #979797;
  margin: 0;
`;

export const detailButton = css`
  font-size: 10px;
  color: #d9d9d9;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;
