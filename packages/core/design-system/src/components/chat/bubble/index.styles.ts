import { css } from '@emotion/react';
import { theme } from '../../../foundation';

export const wrapper = css`
  width: 100%;
  border: 1px solid red;
`;

export const receiverBubbleWrapper = css`
  display: flex;
  gap: 8px;

  width: fit-content;
`;

export const receiverBubbleInfo = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const receiverBubble = css`
  max-width: 180px;
  padding: 10px 14px;
  border-radius: 0 20px 20px;

  background: ${theme.colors.gray100};
`;

export const senderBubbleWrapper = css`
  display: flex;
  justify-content: flex-end;
  gap: 4px;

  width: fit-content;
  height: fit-content;

  align-self: flex-end;
`;

export const senderBubble = css`
  max-width: 180px;
  padding: 10px 14px;
  border-radius: 20px 20px 0;

  background: ${theme.colors.black100};
`;

export const timeWrapper = css`
  display: flex;
  align-self: flex-end;
`;
