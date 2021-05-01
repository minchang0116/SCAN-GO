import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import paymentList from './paymentList';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  paymentList,
});

export default rootReducer;
