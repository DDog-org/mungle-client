import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;

  width: 100%;
  height: fit-content;

  cursor: pointer;
`;

export const profileWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;
  border-radius: 120px 120px 0 0;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const DetailsWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${theme.zIndex.overlay + 1};

  width: 100%;
  padding: 15px;

  color: white;
`;

export const textBox = css`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
`;

export const tags = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
