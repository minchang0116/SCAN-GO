import client from './client';

// 최근 판매 가격
export const getTotalDeposit = () => {
  return client.get('/');
};

// 최근 판매 리스트, 페이징
export const getRecentOrder = pageNum => {
  return client.get(`/?pageNum=${pageNum}`);
};

// 하루 매출액 -> 시간별
export const getTodayPrice = () => {
  return client.get('/');
};

// 관리자 로그인
export const adminLogin = formData => {
  return client.post('/member/login', formData);
};

// 유저 검색 구매리스트 호출 (기간설정)
export const getCostomerPaymentList = (date1, date2, loginId, pageNum) => {
  return client.get(
    `/admin/payments_date?date1=${date1}&date2=${date2}&loginId=${loginId}&pageNum=${pageNum}`,
  );
};

// 유저 검색 구매리스트 호출 (전체 기간)
export const getCostomerAllPaymentList = (loginId, pageNum) => {
  console.log(loginId, pageNum);
  return client.get(
    `/admin/payments_all?loginId=${loginId}&pageNum=${pageNum}`,
  );
};
