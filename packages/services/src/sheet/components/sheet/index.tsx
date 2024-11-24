import styles from './index.styles';

interface Props {
  userProfileImage: string;
  dogProfileImage: string;
  userName: string;
  dogName: string;
  age: string;
  weight: string;
  specialNote: string;
  groomingPreference: string;
  additionalRequest: string;
  location: string;
  dateTime: string;
}

const sheetData: Props = {
  userProfileImage: 'https://via.placeholder.com/50',
  dogProfileImage: 'https://via.placeholder.com/80',
  userName: '왈왈',
  dogName: '꼬미',
  age: '13세',
  weight: '중형견',
  specialNote: '노견, 슬개골 탈구',
  groomingPreference: '전체 가위컷',
  additionalRequest: '없음',
  location: '서울 강남구 역삼동',
  dateTime: '2024. 11. 17(일) 14:00',
};

export default function SheetDetail(): JSX.Element {
  return (
    <div css={styles.wrapper}>
      <header css={styles.header}>
        <div css={styles.backButton}>{'<'}</div>
      </header>
      <div css={styles.userSection}>
        <img
          src={sheetData.userProfileImage}
          alt={`${sheetData.userName} 프로필`}
          css={styles.userImage}
        />
        <p css={styles.userName}>{sheetData.userName}</p>
      </div>

      <div css={styles.sectionDivider}></div>

      <div css={styles.requestTitle}>요청상세</div>
      <section css={styles.detailSection}>
        <div css={styles.sectionTitle}>지역</div>
        <div css={styles.sectionContent}>{sheetData.location}</div>
      </section>

      <section css={styles.detailSection}>
        <div css={styles.sectionTitle}>시술 희망 날짜 및 시간</div>
        <div css={styles.sectionContent}>{sheetData.dateTime}</div>
      </section>

      <section css={styles.detailSection}>
        <div css={styles.sectionTitle}>어떤 아이를 가꿀 예정이신가요?</div>
        <div css={styles.petInfo}>
          <div css={styles.petProfile}>
            <img
              src={sheetData.dogProfileImage}
              alt={`${sheetData.dogName} 프로필`}
              css={styles.petImage}
            />
            <div css={styles.petName}>{sheetData.dogName}</div>
          </div>
          <div css={styles.petDetailsWrapper}>
            <div css={styles.petDetails}>
              <div css={styles.petAttribute}>나이 </div>
              <div css={styles.petAttribute}>몸무게 </div>
              <div css={styles.petAttribute}>특이사항 </div>
              <div css={styles.detailButton}>자세히보기 {'>'}</div>
            </div>
            <div css={styles.petDetails}>
              <div css={styles.petContent}>{sheetData.age}</div>
              <div css={styles.petContent}>{sheetData.weight}</div>
              <div css={styles.petContent}>{sheetData.specialNote}</div>
            </div>
          </div>
        </div>
      </section>

      <section css={styles.detailSection}>
        <div css={styles.sectionTitle}>원하는 미용</div>
        <div css={styles.sectionContent}>{sheetData.groomingPreference}</div>
      </section>

      <section css={styles.detailSection}>
        <div css={styles.sectionTitle}>추가 요청사항</div>
        <div css={styles.sectionContent}>{sheetData.additionalRequest}</div>
      </section>

      <div css={styles.sectionDivider}></div>

      <div css={styles.addTitle}>추가 소견</div>
      <section css={styles.inputSection}>
        <textarea css={styles.textarea} placeholder="추가 요청사항을 입력해주세요." />
      </section>

      <footer css={styles.footer}>
        <button css={styles.acceptButton}>예약받기</button>
      </footer>
    </div>
  );
}
