import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

const title = css`
  padding: 24px 18px;
`;

export const profileWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 16px 18px;
`;

export const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const profileImage = css`
  width: 86px;
  height: 86px;
  border: 4px solid ${theme.colors.green200};
  border-radius: 50%;

  background-color: ${theme.colors.gray200};

  transition: border 0.2s ease;
`;

export const readOnlyLayer = css`
  position: absolute;
  z-index: ${theme.zIndex.ctaButton - 1};

  width: 100%;
  height: 100%;

  background-color: transparent;

  cursor: default;
  pointer-events: all;
`;

export const defaultProfile = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 86px;
  height: 86px;
  border: 4px solid ${theme.colors.gray200};
  border-radius: 50%;

  background-color: ${theme.colors.gray200};
`;

export const divider = css`
  width: 100%;
  height: 7px;
  margin: 16px 0;

  background: ${theme.colors.gray100};
`;

export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  padding: 0 18px;
`;
export const formBox = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const infoCard = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const toggleButtonBox = css`
  display: flex;
  gap: 13px;
`;

export const selectChipButtonBox = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const chipButtonBox = css`
  display: flex;
  gap: 7px;
`;
