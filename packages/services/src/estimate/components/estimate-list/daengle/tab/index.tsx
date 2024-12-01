import { TextButton } from '@daengle/design-system';
import { wrapper, tabButton, activeTabButton } from './index.styles';

interface Props {
  filterType: '미용사' | '병원';
  onFilterChange: (filter: '미용사' | '병원') => void;
}

export default function FilterTabs({ filterType, onFilterChange }: Props): JSX.Element {
  return (
    <div css={wrapper}>
      <TextButton
        css={[tabButton, filterType === '미용사' && activeTabButton]}
        onClick={() => onFilterChange('미용사')}
      >
        미용사
      </TextButton>
      <TextButton
        css={[tabButton, filterType === '병원' && activeTabButton]}
        onClick={() => onFilterChange('병원')}
      >
        병원
      </TextButton>
    </div>
  );
}
