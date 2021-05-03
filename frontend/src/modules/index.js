import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import paymentList from './paymentList';
import userInfo from './userInfo';
import payment from './payment';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  paymentList,
  userInfo,
  payment,
});

export default rootReducer;
