import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as shoppingListApi from '../lib/api/shoppingList';

const shoppingListItemSlice = createSlice({
  name: 'shoppingListItem',
  initialState: {
    loading: false,
    hasErrors: false,
    shoppingList: [],
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
  },
});

export const {} = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
