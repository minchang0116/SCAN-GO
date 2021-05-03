import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as paymentApi from '../lib/api/payment';
import {NativeModules, Platform} from 'react-native';
import {deleteAllShoppingListItem} from './shoppingList';

export const requestPayment = createAsyncThunk(
  'payment/requestPayment',
  async (formData, {dispatch, getState}) => {
    try {
      const {shoppingList} = getState();

      // const SHA = NativeModules.Sha;
      // const plainString = txSeq + txDateTime + storeId + clientNo;
      // const key = 'incssafy12#$12#$';
      // const authHash = await SHA.hmac256(plainString, key);
      // const response = await paymentApi.requestPayment({});
      dispatch(deleteAllShoppingListItem(1));
      return shoppingList.shoppingList;
    } catch (e) {}
  },
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    hasErrors: false,
    paymentList: [
      {
        prodId: 1,
        memberId: 'sdfsdf',
        isCheck: false,
        prodName: '랭거스)크랜베리페트449ml',
        prodPrice: '2800',
        imgUrl: require('../../imgs/랭거스)크랜베리페트449ml.jpg'),
        qty: 1,
      },
      {
        prodId: 2,
        memberId: 'sdfsdf',
        isCheck: false,
        prodCode: '',
        prodName: '롯데)오늘의차황금보리500ml',
        prodPrice: '1500',
        imgUrl: require('../../imgs/롯데)오늘의차황금보리500ml.jpg'),
        qty: 2,
      },
    ],
  },
  reducers: {},
  extraReducers: {
    [requestPayment.pending]: state => {
      state.loading = true;
    },
    [requestPayment.fulfilled]: (state, {payload}) => {
      state.paymentList = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [requestPayment.rejected]: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {} = paymentSlice.actions;
export default paymentSlice.reducer;
