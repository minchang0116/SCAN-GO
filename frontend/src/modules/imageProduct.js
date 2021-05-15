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

    let result = '';

    const response = await imageAPI.getBarcode(formData);
    console.log(response.data);

    let t = response.data;
    t = JSON.stringify(t);
    console.log(t);

    if (t === '{"class_name":"001.vita"}') {
      result = '8806002001845';
    } else if (t === '{"class_name":"002.lemonwater"}') {
      result = '8801056042134';
    } else if (t === '{"class_name":"003.coke"}') {
      result = '8801094017606';
    } else if (t === '{"class_name":"004.toreta"}') {
      result = '8801094412005';
    } else if (t === '{"class_name":"005.bakasf"}') {
      result = '8804381000343';
    } else if (t === '{"class_name":"006.hwal"}') {
      result = '8806016310018';
    } else if (t === '{"class_name":"007.pear"}') {
      result = '8801105000535';
    } else {
      result = '0000050396238';
    }

    return result;
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
