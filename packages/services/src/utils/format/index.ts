import dayjs from 'dayjs';

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, '$1-$2-$3')
    .replace(/(-{1,2})$/g, '');
};

export const formatPhoneNumberWithRegionNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/[^0-9]/g, '');

  if (/^02/.test(cleaned)) {
    return cleaned.replace(/^02(\d{0,3})(\d{0,4})$/, '02-$1-$2').replace(/(-{1,2})$/g, '');
  } else if (/^(051|053|032|062|042|052|044|031|033|043|041|063|061|054|055|064)/.test(cleaned)) {
    return cleaned.replace(/^(\d{2,3})(\d{0,3})(\d{0,4})$/, '$1-$2-$3').replace(/(-{1,2})$/g, '');
  } else if (/^010/.test(cleaned)) {
    return cleaned.replace(/^010(\d{0,4})(\d{0,4})$/, '010-$1-$2').replace(/(-{1,2})$/g, '');
  }

  return cleaned.replace(/^(\d{3})(\d{0,3})(\d{0,4})$/, '$1-$2-$3').replace(/(-{1,2})$/g, '');
};

export const formatLastSendTime = (lastSendTime: string) => {
  const now = dayjs();
  const lastSend = dayjs(lastSendTime);

  const diffInMinutes = now.diff(lastSend, 'minute');

  if (diffInMinutes < 1) {
    return '방금 전';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours}시간 전`;
  } else {
    const days = Math.floor(diffInMinutes / 1440);
    return `${days}일 전`;
  }
};

export const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
