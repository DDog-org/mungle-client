import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  overflow-y: auto;

  width: 100%;
  height: 100%;
`;

export const contentWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  padding: 0 0 calc(${theme.size.appBarHeight} + 18px) 0;
`;

export const cardListWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const bottom = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 18px;
`;
