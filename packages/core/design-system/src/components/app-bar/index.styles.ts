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

  /* AppBar 없는 경우 padding 값 18px로 변경(논의 필요) */

  /* padding: 0 12px 0 8px; */
  padding: 18px;

  #title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`;
