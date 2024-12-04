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
