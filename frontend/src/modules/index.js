import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import paymentList from './paymentList';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  paymentList,
  userInfo,
});

export default rootReducer;
