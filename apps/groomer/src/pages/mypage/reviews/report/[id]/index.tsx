import { useRouter } from 'next/router';
import {
  AppBar,
  Layout,
  RoundButton,
  Select,
  Text,
  TextField,
  theme,
} from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';

import { css } from '@emotion/react';
import { useState } from 'react';
import { REPORT_KEYWORDS } from '~/constants';

import { DefaultProfile } from '@daengle/design-system/icons';
import {
  useGetGroomerReviewReportQuery,
  usePostGroomerReviewReportMutation,
} from '~/queries/review';
import { PostGroomerReviewReportRequestBody } from '~/models';

const options = Object.entries(REPORT_KEYWORDS).map(([key, value]) => ({
  value: key,
  label: value,
}));

export default function MyReviews() {
  const router = useRouter();
  const { id, groomerId } = router.query;
  const groomingReviewId = Number(id);
  const groomingId = Number(groomerId);

  const { data, isLoading, isError } = useGetGroomerReviewReportQuery({ groomingReviewId });
  const mutation = usePostGroomerReviewReportMutation();

  const [selectedKeyword, setSelectedKeyword] = useState<string>('');
  const [reportContent, setReportContent] = useState<string>('');

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };
  const handleSubmit = async () => {
    if (!selectedKeyword || !reportContent) {
      alert('신고 유형과 내용을 모두 입력해주세요.');
      return;
    }
    const body: PostGroomerReviewReportRequestBody = {
      groomerId: groomingId,
      reviewId: groomingReviewId,
      reportType: selectedKeyword,
      reportContent: reportContent,
    };

    mutation.mutate(body, {
      onSuccess: () => {
        alert('신고가 성공적으로 접수되었습니다.');
        router.push(ROUTES.MYPAGE_REVIEWS);
      },
      onError: () => {
        alert('신고 접수에 실패했습니다. 다시 시도해주세요.');
      },
    });
  };
  if (isLoading) {
    return (
      <Layout>
        <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
        <div css={wrapper}>
          <Text tag="h1" typo="title1" color="black">
            로딩 중...
          </Text>
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
        <div css={wrapper}>
          <Text tag="h1" typo="title1" color="black">
            데이터를 불러오는 중 오류가 발생했습니다.
          </Text>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          신고하기
        </Text>
        <div css={profileContainer}>
          {data?.reviewerImageUrl ? (
            <img src={data?.reviewerImageUrl} alt="profile" css={profileImage} />
          ) : (
            <DefaultProfile css={profileImage} />
          )}

          <Text typo="subtitle3">{data?.reviewerNickName}</Text>
        </div>
        <div css={section}>
          <Text typo="subtitle1">신고 유형</Text>
          <Select
            options={options}
            placeholder="신고 유형을 선택해주세요"
            value={selectedKeyword}
            onChange={handleChange(setSelectedKeyword)}
          />
        </div>
        <div css={section}>
          <Text typo="subtitle1">신고 내용</Text>
          <TextField
            placeholder="예) 부적절한 사진이 올라와있고, 협의되지 않은 무리한 요구를 했습니다."
            value={reportContent}
            onChange={handleChange(setReportContent)}
          />
        </div>
        <div css={submit}>
          <RoundButton
            service="partner"
            size="L"
            fullWidth
            disabled={!selectedKeyword || !reportContent}
            onClick={handleSubmit}
          >
            제출하기
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}
const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: calc(${theme.size.appBarHeight} - 18px) 0 0 0;

  h1 {
    margin: 0 18px;
  }
`;
const profileContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;

  padding: 24px 18px;
`;
const profileImage = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;

  background-color: ${theme.colors.gray200};
`;
const section = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin: 8px 18px 32px;
`;
const submit = css`
  margin-top: auto;
  padding: 18px;
`;
