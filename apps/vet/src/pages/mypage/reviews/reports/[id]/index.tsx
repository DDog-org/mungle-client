import { useRouter } from 'next/router';
import { AppBar, Input, Layout, RoundButton, Select, Text, theme } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { GNB } from '~/components/commons';
import { css } from '@emotion/react';
import { useState } from 'react';
import { REPORT_KEYWORDS } from '~/constants';
import { AddInput } from '@daengle/services/components';

const options = Object.entries(REPORT_KEYWORDS).map(([key, value]) => ({
  value: key,
  label: value,
}));

export default function Mypage() {
  const router = useRouter();
  const [selectedKeyword, setSelectedKeyword] = useState<string>('');
  const [reportContent, setReportContent] = useState<string>('');

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = () => {
    if (selectedKeyword) {
      console.log('선택된 키워드:', selectedKeyword); // 내부적으로는 키값 (예: BAD_WORDS)

      // 여기에 키워드 저장 로직 추가
    } else {
      alert('신고 유형을 선택해주세요.');
    }
  };

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          신고하기
        </Text>
        <div css={profileContainer}>
          <img src={'./test.jpg'} alt="profile" css={profileImage} />
          <Text typo="subtitle3">이름</Text>
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
          <AddInput
            placeholder="예) 부적절한 사진이 올라와있고, 협의되지 않은 무리한 요구를 했습니다."
            height={100}
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
