import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const profileCard = css`
  display: flex;
  gap: 20px;

  padding: 15px 0;
  border-bottom: 1px solid ${theme.colors.gray100};
`;

export const imageStyle = css`
  border-radius: 86px 86px 0 0;

  background-color: ${theme.colors.gray200};
`;

export const profile = css`
  margin-top: 32px;
`;

export const tags = css`
  display: flex;
  gap: 6px;

  margin: 6px 0 8px;
`;

export const meterTag = css`
  display: flex;
  align-items: center;

  padding: 4px 12px;
  border-radius: 14px;

  background-color: ${theme.colors.red100};
`;

export const tag = css`
  padding: 4px 12px;
  border: 1px solid ${theme.colors.blue200};
  border-radius: 14px;
`;

export const paw = css`
  margin-right: 1px;
`;
