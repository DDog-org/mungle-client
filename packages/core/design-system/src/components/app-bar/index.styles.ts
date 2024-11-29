import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = (isDefaultBackground: boolean) => css`
  position: fixed;
  top: 0;
  margin: 0 auto;
  z-index: ${theme.zIndex.appBar};
  width: 100%;
  height: 52px;
  max-width: ${theme.size.maxWidth};
  background: ${isDefaultBackground ? theme.colors.white : '#f3f5f8'};
`;

export const contents = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 18px;
  gap: 24px;

  #title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
