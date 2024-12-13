import router from 'next/router';
import { Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { GNB } from '~/components/commons';

export default function MyPage() {
  const handleGoToClick = () => {
    router.push(ROUTES.MYPAGE_USER_INFO_EDIT);
  };
  const handlePetCreateClick = () => {
    router.push(ROUTES.MYPAGE_PET_PROFILE_CREATE);
  };
  const handlePetEditClick = () => {
    router.push(ROUTES.MYPAGE_PET_PROFILE_EDIT);
  };
  const handlePetClick = () => {
    router.push(ROUTES.MYPAGE_PET_PROFILE);
  };

  return (
    <Layout>
      <div>
        <h1>임시 마이페이지 입니다.</h1>
        <button onClick={handleGoToClick}>[사용자 프로필 수정]</button>
        <button onClick={handlePetCreateClick}>[반려견 프로필 등록]</button>
        <button onClick={handlePetEditClick}>[반려견 프로필 수정]</button>
        <button onClick={handlePetClick}>[반려견 프로필 조회]</button>
      </div>

      <GNB />
    </Layout>
  );
}
