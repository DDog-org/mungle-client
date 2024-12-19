import { Text } from '@daengle/design-system';
import { selectItem } from './index.style';
import {
  GroomingFaceCut,
  GroomingFullClipping,
  GroomingFullScissorCut,
  GroomingSpotting,
} from '@daengle/design-system/images';

interface Props {
  title: string;
  componentName: keyof typeof components;
  onClick: () => void;
  isSelected: boolean;
}

const components = {
  GroomingFullClipping,
  GroomingFaceCut,
  GroomingFullScissorCut,
  GroomingSpotting,
};

export function EstimateSelect({ title, componentName, isSelected, onClick }: Props) {
  const SelectedComponent = components[componentName];
  return (
    <div onClick={onClick} css={selectItem(isSelected)}>
      <Text typo="body5" color={isSelected ? 'blue200' : 'gray400'}>
        {title}
      </Text>
      <SelectedComponent />
    </div>
  );
}
