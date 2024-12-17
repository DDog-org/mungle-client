import { css } from '@emotion/react';
import { theme } from '../../../foundation';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  position: fixed;
  bottom: 0;
  z-index: ${theme.zIndex.ctaButton};

  width: 100%;
  max-width: calc(${theme.size.maxWidth} - 36px);
  margin: 0 auto;
  padding: 0 0 21px;

  background: ${theme.colors.whiteGradient100} !important;
`;
