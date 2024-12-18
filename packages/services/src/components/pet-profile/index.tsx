import { AddButton } from '@daengle/design-system/icons';
import { Text } from '@daengle/design-system';
import { circle, wrapper } from './index.styles';

interface Props {
  onClick: () => void;
}

export function RegisterPetProfile({ onClick }: Props) {
  return (
    <div css={wrapper}>
      <div css={circle} onClick={onClick}>
        <AddButton width={12} height={12} />
      </div>
      <Text typo="body11" color="gray400">
        반려견을 등록해 주세요
      </Text>
    </div>
  );
}
