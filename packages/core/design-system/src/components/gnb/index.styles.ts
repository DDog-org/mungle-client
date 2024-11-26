import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const wrapper = css`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  z-index: ${theme.zIndex.gnb};
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${theme.colors.white};
  box-shadow: 0px -4px 6px 0px ${theme.colors.grayOpacity100};
`;

export const menuItem = ({ isActive }: { isActive: boolean }) => css`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  svg {
    path {
      fill: ${isActive ? theme.colors.green200 : theme.colors.black100};
    }
    rect {
      stroke: ${isActive ? theme.colors.green200 : theme.colors.black100};
    }
  }
`;
