export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, '$1-$2-$3')
    .replace(/(-{1,2})$/g, '');
};

export const formatPhoneNumberWithRegionNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/[^0-9]/g, '');

  if (/^02/.test(cleaned)) {
    // 02로 시작하는 번호: 02-000-0000 형태
    return cleaned.replace(/^02(\d{0,3})(\d{0,4})$/, '02-$1-$2').replace(/(-{1,2})$/g, '');
  } else if (/^(051|053|032|062|042|052|044|031|033|043|041|063|061|054|055|064)/.test(cleaned)) {
    // 지역번호로 시작하는 번호: 031-000-0000 형태
    return cleaned.replace(/^(\d{2,3})(\d{0,3})(\d{0,4})$/, '$1-$2-$3').replace(/(-{1,2})$/g, '');
  } else if (/^010/.test(cleaned)) {
    // 010으로 시작하는 번호: 010-0000-0000 형태
    return cleaned.replace(/^010(\d{0,4})(\d{0,4})$/, '010-$1-$2').replace(/(-{1,2})$/g, '');
  }

  // 기타 번호: 기본 패턴 000-000-0000 형태
  return cleaned.replace(/^(\d{3})(\d{0,3})(\d{0,4})$/, '$1-$2-$3').replace(/(-{1,2})$/g, '');
};
