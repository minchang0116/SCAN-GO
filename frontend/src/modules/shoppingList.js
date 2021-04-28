import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as shoppingListApi from '../lib/api/shoppingList';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchShoppingList',
  async () => {
    try {
      const response = await shoppingListApi.readItems();
      console.log('response: ', response);
      return response;
    } catch (e) {}
  },
);
export const increaseShoppingListItem = createAsyncThunk(
  'shoppingList/increaseShoppingListItem',
  async () => {
    try {
      await shoppingListApi.increaseItem();
      const response = await shoppingListApi.readItems();
      console.log('response: ', response);
      return response;
    } catch (e) {}
  },
);
export const decreaseShoppingListItem = createAsyncThunk(
  'shoppingList/decreaseShoppingListItem',
  async () => {
    try {
      await shoppingListApi.decreaseItem();
      const response = await shoppingListApi.readItems();
      console.log('response: ', response);
      return response;
    } catch (e) {}
  },
);
export const deleteShoppingListItem = createAsyncThunk(
  'shoppingList/decreaseShoppingListItem',
  async () => {
    try {
      await shoppingListApi.deleteItem();
      const response = await shoppingListApi.deleteItem();
      console.log('response: ', response);
      return response;
    } catch (e) {}
  },
);

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    loading: false,
    hasErrors: false,
    shoppingList: [
      {
        id: 1,
        productCode: '',
        productName: '랭거스)크랜베리페트449ml',
        productPrice: '2800',
        imgUrl: require('../../imgs/랭거스)크랜베리페트449ml.jpg'),
        count: 1,
      },
      {
        id: 2,
        productCode: '',
        productName: '롯데)오늘의차황금보리500ml',
        productPrice: '1500',
        imgUrl: require('../../imgs/롯데)오늘의차황금보리500ml.jpg'),
        count: 2,
      },
    ],
  },
  reducers: {
    // getShoppingList: (state, action) => {
    //   console.log('d', action);
    //   state.shoppingList = action.payload;
    // },
  },
  extraReducers: {
    [fetchShoppingList.pending]: state => {
      state.loading = true;
    },
    [fetchShoppingList.fulfilled]: (state, {payload}) => {
      state.shoppingList = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [fetchShoppingList.rejected]: state => {
      state.loading = false;
      state.hasErrors = true;
    },
    [increaseShoppingListItem.fulfilled]: state => {},
    [decreaseShoppingListItem.fulfilled]: state => {},
    [deleteShoppingListItem.fulfilled]: state => {},
  },
});

export const {} = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
