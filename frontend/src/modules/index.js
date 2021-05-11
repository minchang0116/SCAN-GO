import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import paymentList from './paymentList';
import userInfo from './userInfo';
import payment from './payment';
import eventProductList from './eventProductList';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  paymentList,
  userInfo,
  payment,
  eventProductList,
});

export default rootReducer;
