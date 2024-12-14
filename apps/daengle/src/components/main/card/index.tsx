import { DefaultProfile } from '@daengle/design-system/icons';
import { Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import Image from 'next/image';

interface Props {
  image: string;
  name: string;
  address: string;
  schedule: string;
}

export function Card({ image, name, address, schedule }: Props) {
  return (
    <div css={wrapper}>
      <Image src={image} alt="미용샵 이미지" width={101} height={117} css={imageStyle} />
      {/* <DefaultProfile width={101} height={117} css={imageStyle} /> */}

      <div css={textBox}>
        <Text typo="title2">{name}</Text>
        <Text typo="body9" color="gray400" css={addressStyle}>
          {address}
        </Text>
        <Text typo="body9" color="gray600">
          {schedule}
        </Text>
      </div>
    </div>
  );
}

const wrapper = css`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 153px;

  border-bottom: 1px solid ${theme.colors.gray200};
`;

const imageStyle = css`
  border-radius: 86px 86px 0 0;

  background-color: ${theme.colors.gray200};
`;

const textBox = css`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
`;

const addressStyle = css`
  margin: 6px 0 19px;
`;
