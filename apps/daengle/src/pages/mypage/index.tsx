import router from 'next/router';
import { ROUTES } from '~/constants/commons';

export default function MyPage() {
  const handleGoToClick = () => {
    router.push(ROUTES.MYPAGE_USER_INFO_EDIT);
  };
  return (
    <div>
      <h1>임시 마이페이지 입니다.</h1>
      <button onClick={handleGoToClick}>사용자 프로필 수정</button>
    </div>
  );
}
