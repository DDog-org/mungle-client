import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  padding: 18px 0 104px;
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
  margin: 24px 0;

  background-color: ${theme.colors.gray100};
`;

export const reservationInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  margin: 14px 0;
  padding: 18px;
  border: 2px solid ${theme.colors.blue200};
  border-radius: 21px;
`;

export const schedule = css`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;
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
  margin: 14px 0;

  background-color: ${theme.colors.black};
`;

export const totalPrice = css`
  display: flex;
  justify-content: space-between;
`;

export const additionalInfoBox = css`
  margin-top: 32px;
`;

export const additionalInfo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 34px;
`;

export const additionalInfoButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  width: 210px;
  height: 34px;
  border-radius: 30px;

  background-color: ${theme.colors.gray100};
`;

export const arrow = css`
  position: absolute;
  right: 18px;

  stroke: ${theme.colors.gray300};
`;

export const grayLine = css`
  width: 100%;
  height: 1px;

  background-color: ${theme.colors.gray100};
`;

export const visitorInfo = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const hiddenBlock = ({ isOpen }: { isOpen: boolean }) => ({
  maxHeight: isOpen ? '200px' : '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  opacity: isOpen ? 1 : 0,
});

export const inputTitle = css`
  margin: 20px 0;
`;

export const input = css`
  margin-bottom: 18px;
`;
