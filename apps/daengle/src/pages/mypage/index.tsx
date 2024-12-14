import { useRouter } from 'next/router';
import { AppBar, Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { GNB } from '~/components/commons';

export default function Mypage() {
  const router = useRouter();

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
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />

      <div>
        <h1>임시 마이페이지 입니다.</h1>
        <button onClick={handleGoToClick}>[사용자 프로필 수정]</button>
        <button onClick={handlePetCreateClick}>[반려견 프로필 등록]</button>
        <button onClick={handlePetEditClick}>[반려견 프로필 수정]</button>
        <button onClick={handlePetClick}>[반려견 프로필 조회]</button>
        <button onClick={() => router.push(ROUTES.MYPAGE_REVIEWS)}>[내가 쓴 리뷰 조회]</button>
        <button onClick={() => router.push(ROUTES.MYPAGE_PAYMENTS)}>[결제 내역 조회]</button>
      </div>

      <GNB />
    </Layout>
  );
}
