import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';

export const wrapper = css`
  background: ${theme.colors.white};
  border-radius: 21px;
  padding: 18px;
`;

export const userImage = css`
  width: 33px;
  height: 33px;
  object-fit: cover;
  border-radius: 50px;
`;

export const userInfo = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const reviewerInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
  margin-right: 5px;
`;

export const reviewImages = css`
  display: flex;
  padding: 5px 1px;
  gap: 6px;
  margin-bottom: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  img {
    width: 101px;
    height: 101px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const tagsContainer = css`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`;

export const tags = css`
  padding: 3px 10px;
  background-color: ${theme.colors.green100};
  border: 0.5px solid ${theme.colors.green200};
  border-radius: 14px;
`;

export const reportButton = css`
  ${theme.typo.body7};
  background-color: ${theme.colors.gray100};
  color: ${theme.colors.gray600};
  border-radius: 20px;
  padding: 6px 10px;
  cursor: pointer;
`;

export const contentContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const contentStyle = (flagged: boolean) => css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: ${flagged ? '80%' : '100%'};
`;

export const contentUnrolled = css`
  display: block;
  -webkit-line-clamp: unset;
`;

export const unroll = css`
  display: flex;
  padding: 18px 18px 0;
  justify-content: center;
`;

export const report = css`
  display: flex;
  padding: 18px 0px 10px;
`;
