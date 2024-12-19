import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: ${theme.zIndex.actionSheet};
  overflow: hidden;

  width: 100%;
  max-width: ${theme.size.maxWidth};
  margin: 0 auto;
  border-radius: 20px 20px 0 0;

  background: ${theme.colors.white};
`;

export const titleWrapper = css`
  padding: 20px 0;
`;

export const menuWrapper = css`
  overflow-y: auto;

  width: 100%;
  max-height: 380px;
`;

export const menu = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 20px 0;

  cursor: pointer;

  & + & {
    border-top: 1px solid ${theme.colors.gray100};
  }
`;
