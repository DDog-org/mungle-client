/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 852px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #f9fafb;
`;

const headerContainer = css`
  padding: 18px;
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
`;

const tabContainer = css`
  display: flex;
  padding: 18px 18px 0px 18px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 18px;
    right: 18px;
    height: 0.5px;
    background-color: #d9d9d9;
  }
`;

const tab = css`
  font-size: 16px;
  padding: 4px 13px 12px;
  border: none;
  background: none;
  color: #d9d9d9;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #000000;
  }
`;

const activeTab = css`
  color: #000000;
  border-bottom: 2px solid #000000;
`;

const listContainer = css`
  flex: 1;
  overflow-y: auto;
  padding: 12px 18px 12px 0px;
`;

const card = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: stretch;
  padding: 20px 24px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border-top-right-radius: 65.6px;
  border-bottom-right-radius: 65.6px;
`;

const contentContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
`;

const detailContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
`;

const cardHeader = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const cardContent = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const profileImage = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

const name = css`
  font-size: 1rem;
  font-weight: bold;
`;

const type = css`
  font-size: 9px;
  padding: 2px 7px;
  border-radius: 14.03px;
  font-weight: bold;
`;

const general = css`
  background-color: #eefffd;
  color: #81d9d0;
  border: #81d9d0 solid 0.5px;
`;

const designated = css`
  background-color: #fffcf3;
  color: #ffc748;
  border: #ffc748 solid 0.5px;
`;

const details = css`
  font-size: 16px;
  color: #000000;
  font-weight: 600;
  margin: 0;
`;

const detailsNot = css`
  color: #d9d9d9;
`;

const date = css`
  font-size: 12px;
  color: #979797;
  margin: 0;
`;

const detailButton = css`
  font-size: 10px;
  color: #d9d9d9;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #000000;
  }
`;

const styles = {
  wrapper,
  headerContainer,
  tabContainer,
  tab,
  activeTab,
  listContainer,
  card,
  contentContainer,
  detailContainer,
  profileImage,
  cardContent,
  cardHeader,
  name,
  type,
  general,
  designated,
  details,
  detailsNot,
  date,
  detailButton,
};

export default styles;
