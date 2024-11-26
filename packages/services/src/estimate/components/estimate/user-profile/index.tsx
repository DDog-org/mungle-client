import { wrapper, image, name } from './index.styles';

interface Props {
  userImage: string;
  userName: string;
}

const UserProfile = ({ userImage, userName }: Props) => {
  return (
    <div css={wrapper}>
      <img src={userImage} alt={`${userName} 프로필`} css={image} />
      <p css={name}>{userName}</p>
    </div>
  );
};

export default UserProfile;
