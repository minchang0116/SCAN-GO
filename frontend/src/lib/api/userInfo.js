import client from './client';

// 로그인 시도
export const LoginWithPassword = ({formData}) => {
  return client.post('/', formData);
};

// 회원 정보 가져오기
export const readUserInfo = token => {
    return client.get('/', token);
}
