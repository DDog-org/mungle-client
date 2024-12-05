import { Text } from '@daengle/design-system';
import { wrapper, image } from './index.styles';

interface Props {
  userImage: string;
  userName: string;
}

export function UserProfile({ userImage, userName }: Props): JSX.Element {
  return (
    <div css={wrapper}>
      <img src={userImage} alt={`${userName} 프로필`} css={image} />
      <Text typo="body4" tag="p">
        {userName}
      </Text>
    </div>
  );
}
