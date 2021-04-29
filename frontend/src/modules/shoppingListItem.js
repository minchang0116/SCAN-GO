// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import * as shoppingListApi from '../lib/api/shoppingList';
// import {fetchShoppingList} from './shoppingList';

// export const increaseShoppingListItem = createAsyncThunk(
//   'shoppingListItem/increaseShoppingListItem',
//   async () => {
//     try {
//       const response = await shoppingListApi.readItems();
//       console.log('response: ', response);
//       return response;
//     } catch (e) {}
//   },
// );

// const shoppingListItemSlice = createSlice({
//   name: 'shoppingListItem',
//   initialState: {
//     loading: false,
//     hasErrors: false,
//   },
//   reducers: {
//     // getShoppingList: (state, action) => {
//     //   console.log('d', action);
//     //   state.shoppingList = action.payload;
//     // },
//   },
//   extraReducers: {
//     [increaseShoppingListItem.pending]: state => {
//       state.loading = true;
//     },
//     [increaseShoppingListItem.fulfilled]: (state, {payload}, dispatch) => {
//       dispatch(fetchShoppingList);
//       state.loading = false;
//       state.hasErrors = false;
//     },
//     [increaseShoppingListItem.rejected]: state => {
//       state.loading = false;
//       state.hasErrors = true;
//     },
//   },
// });

// export const {} = shoppingListItemSlice.actions;
// export default shoppingListItemSlice.reducer;
