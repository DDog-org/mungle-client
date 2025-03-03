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

export const address = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const certificatesWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

export const imageInputWrapper = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 11px 0 0;
`;
