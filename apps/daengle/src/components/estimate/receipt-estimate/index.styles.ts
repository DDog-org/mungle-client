import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  width: 100%;
  max-width: 100%;
`;

export const zigzagContainer = css`
  overflow: hidden;

  margin: 0 14px;
`;

export const zigzag = css`
  transform: translateX(-14px);

  width: calc(100% + 28px);
  height: 16px;

  background-color: white;
  clip-path: polygon(
    0% 100%,
    2.8571% 100%,
    2.8571% 0%,
    7.1429% 100%,
    10.7143% 0%,
    14.2857% 100%,
    17.8571% 0%,
    21.4286% 100%,
    25% 0%,
    28.5714% 100%,
    32.1429% 0%,
    35.7143% 100%,
    39.2857% 0%,
    42.8571% 100%,
    46.4286% 0%,
    50% 100%,
    53.5714% 0%,
    57.1429% 100%,
    60.7143% 0%,
    64.2857% 100%,
    67.8571% 0%,
    71.4286% 100%,
    75% 0%,
    78.5714% 100%,
    82.1429% 0%,
    85.7143% 100%,
    89.2857% 0%,
    92.8571% 100%,
    97.1429% 0%,
    97.1429% 100%,
    100% 100%
  );
  box-sizing: border-box;
`;

export const zigzagUpsideDown = css`
  transform: translateX(-14px);

  width: calc(100% + 28px);
  height: 16px;

  background-color: white;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%);
  clip-path: polygon(
    0% 0%,
    2.8571% 0%,
    2.8571% 100%,
    7.1429% 0%,
    10.7143% 100%,
    14.2857% 0%,
    17.8571% 100%,
    21.4286% 0%,
    25% 100%,
    28.5714% 0%,
    32.1429% 100%,
    35.7143% 0%,
    39.2857% 100%,
    42.8571% 0%,
    46.4286% 100%,
    50% 0%,
    53.5714% 100%,
    57.1429% 0%,
    60.7143% 100%,
    64.2857% 0%,
    67.8571% 100%,
    71.4286% 0%,
    75% 100%,
    78.5714% 0%,
    82.1429% 100%,
    85.7143% 0%,
    89.2857% 100%,
    92.8571% 0%,
    97.1429% 100%,
    97.1429% 0%,
    100% 0%
  );
  box-sizing: border-box;
`;

export const space = css`
  margin: 0 14px;
  padding-bottom: 101px;

  background-color: ${theme.colors.white};
`;
