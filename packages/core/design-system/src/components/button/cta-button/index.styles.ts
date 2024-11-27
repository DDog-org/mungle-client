import { css } from '@emotion/react';
import { theme } from '../../../foundation';

export const wrapper = css`
  position: fixed;
  bottom: 18px;
  z-index: ${theme.zIndex.ctaButton};
  margin: 0 auto;
  width: 100%;
  max-width: calc(${theme.size.maxWidth} - 36px);
`;
