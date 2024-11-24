import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 852px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`;

const backButton = css`
  font-size: 16px;
  color: #000;
  margin: 20px 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

const userSection = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 18px;
  align-items: center;
`;

const userImage = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const userName = css`
  justify-content: center;
`;

const sectionDivider = css`
  width: 100%;
  height: 8px;
  background-color: #f6f6f6;
  display: block;
  margin: 0;
`;

const requestTitle = css`
  padding: 24px 18px;
  font-size: 16px;
  font-weight: 600;
`;

const detailSection = css`
  display: flex;
  flex-direction: column;
  padding: 8px 18px;
  margin-bottom: 16px;
  gap: 14px;
`;

const sectionTitle = css`
  font-size: 14px;
  color: #979797;
`;

const sectionContent = css`
  font-size: 16px;
  color: #000000;
  margin-left: 2px;
`;

const petInfo = css`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 3px;
  margin-bottom: 4px;
`;

const petProfile = css`
  display: flex;
  flex-direction: column;
`;

const petImage = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const petDetailsWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 24px;
  border-left: 2px solid #d9d9d9;
  padding-left: 12px;
  align-items: stretch;
`;

const petDetails = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const petName = css`
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-top: 10px;
`;

const petAttribute = css`
  font-size: 14px;
  color: #979797;
`;

const petContent = css`
  font-size: 14px;
  color: #000000;
`;

const detailButtonWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const detailButton = css`
  font-size: 14px;
  color: #d9d9d9;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 3px;
  &:hover {
    text-decoration: underline;
  }
`;

const addTitle = css`
  font-size: 14px;
  color: #979797;
  padding: 24px 18px 14px;
`;

const inputSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 18px;
  margin-bottom: 16px;
`;

const textarea = css`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  font-size: 14px;
  color: #000000;
  background-color: #f0f0f0;
  border-radius: 10px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 3px rgba(37, 99, 235, 0.5);
  }
`;

const footer = css`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: #ffffff;
`;
const acceptButton = css`
  background-color: #d9d9d9;
  width: 100%;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  padding: 16px 0px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: white;
  }
`;

const styles = {
  wrapper,
  header,
  backButton,
  userSection,
  userImage,
  userName,
  sectionDivider,
  requestTitle,
  detailSection,
  sectionTitle,
  sectionContent,
  petInfo,
  petProfile,
  petImage,
  petDetailsWrapper,
  petDetails,
  petName,
  petAttribute,
  petContent,
  detailButtonWrapper,
  detailButton,
  addTitle,
  inputSection,
  textarea,
  footer,
  acceptButton,
};

export default styles;
