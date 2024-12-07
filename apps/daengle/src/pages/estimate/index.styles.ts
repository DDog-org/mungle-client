import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  min-height: 100%;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

export const headerContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  margin-top: 4px;
  padding: 18px 34px;

  cursor: pointer;
`;

export const line = css`
  width: 100%;
  height: 1px;

  background: ${theme.colors.gray100};
`;

export const modalItem = (isDesignation: boolean) => css`
  width: 100%;
  border: none;

  color: ${isDesignation ? theme.colors.blue200 : theme.colors.gray400};
  text-align: center;

  cursor: pointer;

  :hover {
    color: ${theme.colors.blue200};
  }
`;

export const modalOverlay = css`
  position: fixed;
  inset: 0;

  z-index: 100;

  background: ${theme.colors.grayOpacity300};
`;

export const modalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;
  position: fixed;
  bottom: 0;
  z-index: 101;

  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 21px 18px;
  border-radius: 20px 20px 0 0;

  background: white;

  animation: slideUp 0.3s ease-in-out;

  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
    }
  }
`;
