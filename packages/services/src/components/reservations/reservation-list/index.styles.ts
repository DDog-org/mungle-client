import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  margin-top: 24px;
  padding: 0 18px;
`;

export const timeline = css`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  min-height: 60px;
  margin-bottom: 16px;
`;

export const dot = (isLast: boolean) => css`
  position: relative;

  width: 12px;
  height: 12px;
  border-radius: 50%;

  background-color: ${theme.colors.green200};
  ${!isLast &&
  `&::after {
      content: '';
      position: absolute;
      top: 18px; /* 점 바로 밑에서 시작 */
      left: 50%;
      transform: translateX(-50%);
      z-index: 0;
      width: 1px; /* 점선 두께 */
      height: calc(100% + 40px); /* 점선 길이 */
      background-image: linear-gradient(to bottom, black 50%, transparent 50%);
      background-size: 1px 8px; /* 점선 간격 */
      background-repeat: repeat-y;
    }
  `}
`;

export const time = css`
  color: ${theme.colors.gray500};
  font-size: 14px;
`;

export const content = css`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;

  border-radius: 50px;

  background-color: ${theme.colors.white};

  cursor: pointer;
`;

export const profileImage = css`
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 50%;

  background-color: ${theme.colors.background};
`;

export const desiredStyle = css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const description = css`
  margin: 21px 24px;

  color: ${theme.colors.gray500};
  font-size: 12px;
`;

export const empty = css`
  margin-top: 180px;

  text-align: center;
`;
