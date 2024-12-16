import { useState } from 'react';
import { Text, Layout, theme } from '@daengle/design-system';
import { GNB } from '~/components/commons';
import { css } from '@emotion/react';

const DATES: { id: number; day: keyof typeof RESERVATIONS; label: string }[] = [
  { id: 1, day: '19', label: '월' },
  { id: 2, day: '20', label: '화' },
  { id: 3, day: '21', label: '수' },
  { id: 4, day: '22', label: '목' },
  { id: 5, day: '23', label: '금' },
];

const RESERVATIONS = {
  '19': [
    { time: '10:00', name: '꾸미', image: './profile1.jpg', description: '전체 가위컷' },
    { time: '12:00', name: '장미', image: './profile2.jpg', description: '전체 클리핑 + 얼굴 컷' },
    { time: '15:00', name: '가이', image: './profile3.jpg', description: '전체 클리핑' },
    { time: '17:00', name: '강쥐', image: './profile4.jpg', description: '전체 클리핑 + 얼굴 컷' },
  ],
  '20': [{ time: '11:00', name: '초코', image: './profile5.jpg', description: '부분 가위컷' }],
  '21': [],
  '22': [
    { time: '17:00', name: '강쥐', image: './profile4.jpg', description: '전체 클리핑 + 얼굴 컷' },
  ],
  '23': [
    { time: '10:00', name: '꾸미', image: './profile1.jpg', description: '전체 가위컷' },
    { time: '12:00', name: '장미', image: './profile2.jpg', description: '전체 클리핑 + 얼굴 컷' },
    { time: '15:00', name: '가이', image: './profile3.jpg', description: '전체 클리핑' },
    { time: '17:00', name: '강쥐', image: './profile4.jpg', description: '전체 클리핑 + 얼굴 컷' },
  ],
};

export default function Reservations() {
  const [selectedDate, setSelectedDate] = useState<keyof typeof RESERVATIONS>('19');

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <header css={headerContainer}>
          <Text typo="title1">예약</Text>
        </header>
        <div css={calendar}>
          <Text typo="title2">11월</Text>
          <div css={dateTabs}>
            {DATES.map((date) => (
              <div
                key={date.id}
                css={dateTab(selectedDate === date.day)}
                onClick={() => setSelectedDate(date.day)}
              >
                <Text typo="body8" color={selectedDate === date.day ? 'blue200' : 'gray500'}>
                  {date.label}
                </Text>
                <div css={gap}></div>
                <Text typo="title2" color={selectedDate === date.day ? 'blue200' : 'black'}>
                  {date.day}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div css={container}>
          {RESERVATIONS[selectedDate]?.map((item, index) => {
            const isLast = index === RESERVATIONS[selectedDate].length - 1; // 마지막 요소 판단
            return (
              <div key={index} css={timeline}>
                <div css={dot(isLast)}></div> {/* 마지막 점인지 전달 */}
                <span css={time}>{item.time}</span>
                <div css={content}>
                  <img src={item.image} alt="profile" css={profileImage} />
                  <Text typo="subtitle3">{item.name}</Text>
                  <div css={desiredStyle}>
                    <Text typo="body10" css={description}>
                      {item.description}
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <GNB />
    </Layout>
  );
}

const wrapper = css`
  height: 100vh;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

const headerContainer = css`
  margin-top: 20px;
  padding: 18px;
`;

const calendar = css`
  padding: 16px 18px 0;
`;

const dateTabs = css`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;
  padding: 0 18px;
`;
const gap = css`
  padding: 4px;
`;

const dateTab = (isActive: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 19px;
  border-bottom: ${isActive ? `2px solid ${theme.colors.blue200}` : 'none'};

  cursor: pointer;
`;

const container = css`
  margin-top: 24px;
  padding: 0 18px;
`;

const dot = (isLast: boolean) => css`
  position: relative;

  width: 12px;
  height: 12px;
  border-radius: 50%;

  background-color: #4ac0ef;

  ${!isLast &&
  `
    &::after {
      content: '';
      position: absolute;
      top: 18px; /* 점 바로 밑에서 시작 */
      left: 50%;
      transform: translateX(-50%);
      z-index: 0;

      width: 1px; /* 점선 두께 */
      height: calc(100% + 40px); /* 점선 길이 */

      background-image: linear-gradient(to bottom, black 50%, transparent 50%);
      background-size: 1px 8px; /* 점선 간격 */
      background-repeat: repeat-y;
    }
  `}
`;

const timeline = css`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  min-height: 60px; /* 컨테이너에 최소 높이 추가 */
  margin-bottom: 16px;

  /* 마지막 타임라인의 점선 제거 */
  &:last-child .dot::after {
    content: none;
  }
`;

const time = css`
  color: ${theme.colors.gray500};
  font-size: 14px;
`;

const content = css`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;

  border-radius: 50px;

  background-color: ${theme.colors.white};
`;

const profileImage = css`
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 50%;
`;

const description = css`
  margin: 21px 24px;

  color: ${theme.colors.gray500};
  font-size: 12px;
`;

const desiredStyle = css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
