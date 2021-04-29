import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as shoppingListApi from '../lib/api/shoppingList';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchShoppingList',
  async () => {
    try {
      const response = await shoppingListApi.readItems();
      return response;
    } catch (e) {}
  },
);
export const updateShoppingListItem = createAsyncThunk(
  'shoppingList/updateShoppingListItem',
  async ({prodId, memberId, qty}) => {
    try {
      await shoppingListApi.updateItem(prodId, memberId, qty);
      return {prodId, qty};
    } catch (e) {}
  },
);
export const deleteShoppingListItem = createAsyncThunk(
  'shoppingList/deleteShoppingListItem',
  async ({prodId}) => {
    try {
      await shoppingListApi.deleteItem();
      return prodId;
    } catch (e) {}
  },
);
export const addShoppingListItemByBarcode = createAsyncThunk(
  'shoppingList/addShoppingListItemByBarcode',
  async formData => {
    try {
      const response = await shoppingListApi.addItemByBarcode(formData);

      return response;
    } catch (e) {
      console.log(e);
    }
  },
);
const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    loading: false,
    hasErrors: false,
    shoppingList: [
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
    lastItem: null,
  },
  reducers: {
    isCheckedShoppingListItem: (state, {payload}) => {
      console.log('체크');
      state.shoppingList = state.shoppingList.map(item => {
        if (item.prodId === payload.prodId) {
          return {...item, isCheck: !item.isCheck};
        } else {
          return item;
        }
      });
    },
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
    [updateShoppingListItem.fulfilled]: (state, {payload}) => {
      state.shoppingList = state.shoppingList.map(item => {
        if (item.prodId === payload.prodId) {
          return {...item, qty: payload.qty};
        } else {
          return item;
        }
      });
    },
    [deleteShoppingListItem.fulfilled]: (state, {payload}) => {
      state.filter(list => list.id !== payload);
    },
    [addShoppingListItemByBarcode.pending]: state => {
      state.loading = true;
    },
    [addShoppingListItemByBarcode.fulfilled]: (state, {payload}) => {
      state.lastItem = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    [addShoppingListItemByBarcode.rejected]: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {isCheckedShoppingListItem} = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
