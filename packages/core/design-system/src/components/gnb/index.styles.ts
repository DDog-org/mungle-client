import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = css`
  width: 100%;
  padding: 12px 0;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  z-index: ${theme.zIndex.gnb};
  max-width: ${theme.size.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${theme.colors.white};
  box-shadow: 0px -4px 6px 0px ${theme.colors.grayOpacity100};
`;

export const menuItem = ({ isActive }: { isActive: boolean }) => css`
  width: 69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
