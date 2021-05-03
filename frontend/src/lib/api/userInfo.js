import client from './client';

// Email 중복 체크
export const checkEmailAddress = email => {
  return client.get('/', {
    params: {memberId: email},
  });
};

// 핸드폰 번호 중복 체크
export const checkCellNumber = cellnumber => {
  return client.get('/', {
    params: {cell: cellnumber},
  });
};

// 회원가입
export const registerUser = ({formData}) => {
  return client.post('/', formData);
};

// 자동 로그인 Token 확인
export const checkTokenForAutoLogin = token => {
  return client.post('/', token);
};

// 로그인 시도
export const LoginWithPassword = ({formData}) => {
  return client.post('/', formData);
};

// 회원 정보 가져오기
export const readUserInfo = token => {
    return client.get('/', token);
}
