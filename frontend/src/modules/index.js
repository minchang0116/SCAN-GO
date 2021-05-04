import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import paymentList from './paymentList';
import auth from './auth';
import payment from './payment';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  paymentList,
  auth,
  payment,
});

export default rootReducer;
