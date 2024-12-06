import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  min-height: 100%;
  padding-bottom: 104px;
  background-color: ${theme.colors.background};
`;

export const headerContainer = css`
  padding: 18px 34px;
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const line = css`
  width: 100%;
  height: 1px;
  background: ${theme.colors.gray100};
`;

export const modalItem = (isDesignation: boolean) => css`
  width: 100%;
  text-align: center;
  border: none;
  color: ${isDesignation ? theme.colors.blue200 : theme.colors.gray400};
  cursor: pointer;

  :hover {
    color: ${theme.colors.blue200};
  }
`;

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.grayOpacity300};
  z-index: 100;
`;

export const modalContent = css`
  position: fixed;
  width: 100%;
  max-width: ${theme.size.maxWidth};
  justify-content: center;
  align-items: center;
  bottom: 0;
  background: white;
  border-radius: 20px 20px 0 0;
  padding: 21px 18px;
  z-index: 101;
  animation: slideUp 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 19px;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
