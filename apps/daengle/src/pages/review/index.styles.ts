import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';

export const wrapper = css`
  display: flex;
  flex-direction: column;

  background-color: ${theme.colors.background};
`;

export const header = css`
  margin-bottom: 6px;
  padding: 18px;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 0 18px;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 18px;
  border-radius: 21px;

  background-color: ${theme.colors.white};
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const starRatingContainer = css`
  display: flex;
  gap: 8px;

  button {
    border: none;

    background: none;
    color: ${theme.colors.gray300};
    font-size: 24px;

    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;

export const fieldGroup = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const tagButton = css`
  padding: 8px 12px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 16px;

  background: ${theme.colors.background};
  color: ${theme.colors.gray500};
  font-size: 14px;

  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.gray300};

    color: ${theme.colors.gray300};
  }
`;

export const tagButtonActive = css`
  ${tagButton};
  background: ${theme.colors.gray300};
  color: ${theme.colors.gray300};
  border-color: ${theme.colors.gray300};
`;

export const reviewInput = css`
  textarea {
    width: 100%;
    min-height: 100px;
    padding: 12px;
    border: 1px solid ${theme.colors.gray200};
    border-radius: 8px;

    font-size: 14px;
    resize: none;

    &:focus {
      outline: none;
      border-color: ${theme.colors.gray300};
    }
  }
`;

export const submitButton = css`
  margin-top: 16px;
`;
