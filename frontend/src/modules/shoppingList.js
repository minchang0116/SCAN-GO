import {createSlice} from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {},
  reducers: {},
});

export const todosActions = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
