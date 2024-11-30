import { Dispatch, SetStateAction } from 'react';
import { tabContainer, tab, activeTab } from './index.styles';
import { TextButton } from '@daengle/design-system';

interface Props {
  filterType: '전체' | '지정';
  setFilterType: Dispatch<SetStateAction<'전체' | '지정'>>;
}

export default function Tab({ filterType, setFilterType }: Props): JSX.Element {
  return (
    <div css={tabContainer}>
      <TextButton
        css={[tab, filterType === '전체' && activeTab]}
        onClick={() => setFilterType('전체')}
      >
        전체 견적서
      </TextButton>
      <TextButton
        css={[tab, filterType === '지정' && activeTab]}
        onClick={() => setFilterType('지정')}
      >
        지정 견적서
      </TextButton>
    </div>
  );
}
