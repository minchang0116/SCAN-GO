import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as paymentListAPI from '../lib/api/paymentList';

export const fetchPaymentList = formData =>
  createAsyncThunk('payment/fetchPaymentList', async () => {
    try {
      const response = await paymentListAPI.readItems(formData);
      return response;
    } catch (e) {}
  });
const paymentListSlice = createSlice({
  name: 'paymentList',
  initialState: {
    loading: false,
    hasErrors: false,
    paymentList: [],
  },
  reducers: {},
  extraReducers: {
    [fetchPaymentList.pending]: state => {
      state.loading = true;
    },
    [fetchPaymentList.fulfilled]: (state, {payload}) => {
      state.paymentList = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    [fetchPaymentList.rejected]: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export default paymentListSlice.reducer;
