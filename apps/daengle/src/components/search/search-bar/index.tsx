import { theme } from '@daengle/design-system';
import { GraySearchIcon } from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

interface SearchBarProps {
  onValueChange: (value: string) => void;
}

export default function SearchBar({ onValueChange }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onValueChange(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = (e.target as HTMLInputElement).value;
      onValueChange(value);
    }
  };

  return (
    <div css={wrapper}>
      <button type="submit" css={button}>
        <GraySearchIcon width={16} height={16} />
      </button>
      <input type="text" onChange={handleInputChange} onKeyDown={handleKeyDown} css={input} />
    </div>
  );
}

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 80%;
  height: 36px;
  padding: 0 0 0 22px;
  border-radius: 20px;

  background: ${theme.colors.gray100};
`;
const input = css`
  width: 250px;

  font-size: ${theme.typo.body11};
  text-align: left;
`;

const button = css`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
`;
