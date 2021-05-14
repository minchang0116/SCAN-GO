import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as imageAPI from '../lib/api/image';

export const fetchBarcode = createAsyncThunk(
  'imageProduct/fetchBarcode',
  async uri => {
    let formData = new FormData();
    formData.append('file', {
      uri: uri,
      name: 'picture.jpg',
      type: 'image/jpg',
    });
    // const response = await imageAPI.getBarcode(formData);
    // return response.data;
    return '8806002005638';
  },
);
const imageProductSlice = createSlice({
  name: 'imageProduct',
  initialState: {
    loading: false,
    hasErrors: false,
    barcode: null,
  },
  reducers: {
    removeBarcode: state => {
      console.log('removeBarcode!');
      state.barcode = null;
    },
  },
  extraReducers: {
    [fetchBarcode.pending]: state => {
      state.loading = true;
    },
    [fetchBarcode.fulfilled]: (state, {payload}) => {
      state.barcode = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [fetchBarcode.rejected]: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {removeBarcode} = imageProductSlice.actions;
export default imageProductSlice.reducer;
