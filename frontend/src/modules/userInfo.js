import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as authAPI from '../lib/api/auth';


export const fetchUserInfo = createAsyncThunk(
    'userInfo/fetchUserInfo',
    async (loginInfo) => {
      try {
        console.log("유저 정보 요청 dispatch 성공 - ")
        let response = await authAPI.LoginWithPassword(loginInfo);
        return response.data;
      } catch (e) {
        console.log("유저 정보 요청 dispatch 실패 - ")
      }
    },
  );
  const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
      loading: false,
      hasErrors: false,
      user:{},
    },
    reducers: {
        callUserLogout : () => {
            state.user = {};
        }
    },
    extraReducers: {
      [fetchUserInfo.pending]: state => {
        state.loading = true;
      },
      [fetchUserInfo.fulfilled]: (state, {payload}) => {
        state.user = payload;
        console.log("유저 정보 이행 user: " + payload);
        state.loading = false;
        state.hasErrors = false;
      },
      [fetchUserInfo.rejected]: state => {
        state.loading = false;
        state.hasErrors = true;
      },
    },
  });
  
  export const {} =  userSlice.actions;
  export default userSlice.reducer;
