import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 18px 18px calc(${theme.size.ctaButtonHeight} + 32px) 18px;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const store = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const certificatesWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const certificates = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const certificateInfo = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const imageInputWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 12px 0 0 0;
`;
