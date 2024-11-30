import { Text } from '@daengle/design-system';
import { wrapper, image } from './index.styles';

interface Props {
  userImage: string;
  userName: string;
}

const UserProfile = ({ userImage, userName }: Props) => {
  return (
    <div css={wrapper}>
      <img src={userImage} alt={`${userName} 프로필`} css={image} />
      <Text typo="body4" tag="p">
        {userName}
      </Text>
    </div>
  );
};

export default UserProfile;
