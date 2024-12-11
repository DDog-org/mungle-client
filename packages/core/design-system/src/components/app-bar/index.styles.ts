import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = css`
  position: fixed;
  top: 0;
  z-index: ${theme.zIndex.appBar};

  width: 100%;
  max-width: ${theme.size.maxWidth};
  height: 52px;
  margin: 0 auto;

  background: none;
`;

export const contents = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;

  width: 100%;
  height: 100%;
  padding: 0 18px;

  #title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
