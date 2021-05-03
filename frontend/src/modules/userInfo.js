import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as userInfoAPI from '../lib/api/userInfo';


export const fetchUserInfo = createAsyncThunk(
    'user/fetchUserInfo',
    async () => {
      try {
        const response = await userInfoAPI.readUserInfo();
        return response;
      } catch (e) {}
    },
  );
  const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
      loading: false,
      hasErrors: false,
      userInfo:{},
    },
    reducers: {
        callUserLogout : () => {
            state.userInfo = {};
        }
    },
    extraReducers: {
      [fetchUserInfo.pending]: state => {
        state.loading = true;
      },
      [fetchUserInfo.fulfilled]: (state, {payload}) => {
        state.userInfo = payload.data;
        state.loading = false;
        state.hasErrors = false;
      },
      [fetchUserInfo.rejected]: state => {
        state.loading = false;
        state.hasErrors = true;
      },
    },
  });
  
  export default userInfoSlice.reducer;
