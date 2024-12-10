import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 23px 18px 18px;
  border-radius: 21px;

  background: ${theme.colors.white};
`;

export const top = css`
  display: flex;
  justify-content: space-between;
`;

export const groomerInfo = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  max-width: 40%;

  cursor: pointer;
`;

export const groomerText = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const buttonWrapper = css`
  display: flex;
  gap: 6px;
`;

export const imageWrapper = css`
  display: flex;
  gap: 6px;
  overflow-x: auto;

  width: 100%;
  margin: 17px 0 0;

  img {
    border-radius: 10px;
  }
`;

export const tagWrapper = css`
  display: flex;
  gap: 6px;

  width: 100%;
  margin: 13px 0 0;
`;

export const tag = css`
  display: flex;

  padding: 3px 10px;
  border: 1px solid ${theme.colors.blue200};
  border-radius: 14px;

  background: ${theme.colors.blue100};
`;

export const clampText = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
`;
