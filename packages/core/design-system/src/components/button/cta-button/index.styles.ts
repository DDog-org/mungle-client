import { css } from '@emotion/react';
import { theme } from '../../../foundation';

export const wrapper = css`
  position: fixed;
  bottom: 0;
  z-index: ${theme.zIndex.ctaButton};
  margin: 0 auto;
  width: calc(100% - 36px);
  max-width: calc(${theme.size.maxWidth} - 36px);
  padding: 0 0 21px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  background: ${theme.colors.whiteGradient100} !important;
`;
