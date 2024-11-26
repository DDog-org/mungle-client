import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const buttonBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 357px;
  height: 54px;
  border: none;
  border-radius: 27px;
  cursor: pointer;

  background-color: #fee500;
`;
const buttonTextBox = css`
  font-size: 14px;
  font-weight: 500;
`;

const styles = {
  wrapper,
  buttonBox,
  buttonTextBox,
};

export default styles;
