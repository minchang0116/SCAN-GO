import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as authAPI from '../lib/api/auth';


export const fetchUserInfo = createAsyncThunk(
    'userInfo/fetchUserInfo',
    async (token) => {
      try {
        //const response = await authAPI.getUserInfo(token);
        // return response;
        console.log("유저 정보 요청 dispatch 성공 - " + token)
        return ;
      } catch (e) {
        console.log("유저 정보 요청 dispatch 실패 - " + token)
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
        console.log("유저 정보 이행 user: " + state.user);
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
