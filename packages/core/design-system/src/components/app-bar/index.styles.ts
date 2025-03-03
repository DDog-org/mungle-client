import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = (backgroundColor?: string) => css`
  position: fixed;
  top: 0;
  z-index: ${theme.zIndex.appBar};

  width: 100%;
  max-width: ${theme.size.maxWidth};
  height: 52px;
  margin: 0 auto;

  background: ${backgroundColor || 'none'};
`;

export const contents = ({ isPrefix, isSuffix }: { isPrefix: boolean; isSuffix: boolean }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;

  width: 100%;
  height: 100%;
  padding-right: ${isSuffix ? '18px' : '12px'};
  padding-left: ${isPrefix ? '18px' : '8px'};

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
