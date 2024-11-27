import { css } from '@emotion/react';
import { theme } from '../../foundation';

export const screen = css`
  width: 100%;
  min-width: ${theme.size.minWidth};
  max-width: ${theme.size.maxWidth};
  height: 100vh;
  margin: 0 auto;
  overscroll-behavior-y: contain;
`;

export const main = ({ isAppBarExist }: { isAppBarExist: boolean }) => css`
  width: 100%;
  height: 100%;
  padding: ${isAppBarExist ? `${theme.size.appBarHeight} 0 0 0` : 0};
  display: flex;
  flex-direction: column;
`;
