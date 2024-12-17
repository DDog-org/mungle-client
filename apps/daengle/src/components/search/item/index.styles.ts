import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  align-items: center;

  width: 100%;
  width: fit-content;
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
`;
export const opacity = css`
  background: ${theme.colors.grayOpacity200};
`;
export const DetailsWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  padding: 15px;

  color: white;
`;
export const imageStyle = css`
  border-radius: 86px 86px 0 0;

  background-color: ${theme.colors.gray200};
`;

export const textBox = css`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
`;

export const tags = css`
  display: flex;
  gap: 6px;
`;
