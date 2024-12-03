import { TextButton } from '@daengle/design-system';
import { wrapper, tabButton, activeTabButton } from './index.styles';

interface Props {
  items: string[];
  activeItem: string;
  onChange: (item: string) => void;
}
//TODO: 견적서 리스트 tab 컴포넌트와 일치화 시키기 - 아마 이 아이로 통일
export default function Tab({ items, activeItem, onChange }: Props) {
  return (
    <div css={wrapper}>
      {items.map((item) => (
        <TextButton
          key={item}
          css={[tabButton, activeItem === item && activeTabButton]}
          onClick={() => onChange(item)}
        >
          {item}
        </TextButton>
      ))}
    </div>
  );
}
