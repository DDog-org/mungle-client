import { TextButton } from '@daengle/design-system';
import { wrapper, tabButton, activeTabButton } from './index.styles';

interface Props {
  items: string[];
  activeItem: string;
  onChange: (item: string) => void;
}

export function Tab({ items, activeItem, onChange }: Props) {
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
