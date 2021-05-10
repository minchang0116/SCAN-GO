import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as authAPI from '../lib/api/auth';
import * as asyncStorage from '../AsyncStorage/asyncStorage';

export const fetchUserInfo = createAsyncThunk(
  'userInfo/fetchUserInfo',
  async loginInfo => {
    let response = await authAPI.LoginWithPassword(loginInfo);
    if (loginInfo.autoLogin) {
      asyncStorage.storeData(
        'token',
        response.headers.authorization.split(' ')[1],
      );
    }
    asyncStorage.storeObjectData('user', response.data);
    return response;
  },
);

export const fetchUserInfoWithToken = createAsyncThunk(
  'userInfo/fetchUserInfoWithToken',
  async token => {
    let response = await authAPI.getUserInfo(token);
    return response;
  },
);

export const fetchUserInfoWithAsyncStorage = createAsyncThunk(
  'userInfo/fetchUserInfoWithAsyncStorage',
  async ({userData}) => {
    return userData;
  },
);

const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    loading: false,
    hasErrors: false,
    memberId: '1',
    loginId: '',
    birth: '',
    phone: '',
  },
  reducers: {
    callUserLogout: () => {
      state.user = {};
    },
  },
  extraReducers: {
    // 일반 로그인
    [fetchUserInfo.pending]: state => {
      state.loading = true;
    },
    [fetchUserInfo.fulfilled]: (state, {payload}) => {
      console.log('유저 정보 요청 dispatch 성공 - ');
      console.log('유저 정보 이행');

      // 유저 정보 저장
      state.memberId = payload.data.id;
      state.loginId = payload.data.loginId;
      state.birth = payload.data.birth;
      state.phone = payload.data.phone;
      state.loading = false;
      state.hasErrors = false;
    },
    [fetchUserInfo.rejected]: state => {
      console.log('유저 정보 요청 dispatch 실패 - ');
      state.loading = false;
      state.hasErrors = true;
    },

    // token 기반 로그인
    [fetchUserInfoWithToken.pending]: state => {
      state.loading = true;
    },
    [fetchUserInfoWithToken.fulfilled]: (state, {payload}) => {
      console.log('Token으로 유저 정보 요청 dispatch 성공 - ');
      console.log('Token으로 유저 정보 이행');
      state.memberId = payload.data.id;
      state.loginId = payload.data.loginId;
      state.birth = payload.data.birth;
      state.phone = payload.data.phone;
      state.loading = false;
      state.hasErrors = false;
    },
    [fetchUserInfoWithToken.rejected]: state => {
      console.log('Token으로 유저 정보 요청 dispatch 실패 - ');
      state.loading = false;
      state.hasErrors = true;
    },
    // AsyncStorage 유저 정보 이행
    [fetchUserInfoWithAsyncStorage.pending]: state => {
      state.loading = true;
    },
    [fetchUserInfoWithAsyncStorage.fulfilled]: (state, {payload}) => {
      console.log('AsyncSotrage로 유저 정보 요청 dispatch 성공 - ');
      console.log('AsyncSotrage로 유저 정보 이행');
      state.memberId = payload.id;
      state.loginId = payload.loginId;
      state.birth = payload.birth;
      state.phone = payload.phone;
      state.loading = false;
      state.hasErrors = false;
    },
    [fetchUserInfoWithAsyncStorage.rejected]: state => {
      console.log('AsyncSotrage로 유저 정보 요청 dispatch 실패 - ');
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
