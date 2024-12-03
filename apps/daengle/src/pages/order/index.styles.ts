import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 18px 0 104px 0;
`;

export const section = css`
  padding: 0 18px;
`;

export const title = css`
  margin-bottom: 24px;
`;

export const subtitle = css`
  margin: 6px 0;
`;

export const line = css`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.gray100};
  margin: 24px 0;
`;

export const reservationInfo = css`
  border: 2px solid ${theme.colors.blue200};
  border-radius: 21px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin: 14px 0;
`;

export const schedule = css`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
`;

export const dateTime = css`
  display: flex;
  gap: 11px;
`;

export const reservationPrice = css`
  padding: 0 18px;
`;

export const price = css`
  display: flex;
  justify-content: space-between;
`;

export const thinLine = css`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.black};
  margin: 14px 0;
`;

export const totalPrice = css`
  display: flex;
  justify-content: space-between;
`;

export const additionalInfoBox = css`
  margin-top: 32px;
`;

export const additionalInfo = css`
  width: 100%;
  height: 34px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const additionalInfoButton = css`
  width: 210px;
  height: 34px;
  background-color: ${theme.colors.gray100};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const arrow = css`
  position: absolute;
  right: 18px;
`;

export const grayLine = css`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray200};
`;

export const visitorInfo = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const capsuleButton = css`
  width: 41px;
  height: 26px;
`;

export const inputTitle = css`
  margin: 20px 0;
`;

export const input = css`
  margin-bottom: 18px;
`;
