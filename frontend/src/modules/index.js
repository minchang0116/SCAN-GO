import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import paymentList from './paymentList';
import userInfo from './userInfo';
import payment from './payment';
import eventProductList from './eventProductList';
import rankingProduct from './rankingProduct';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  paymentList,
  userInfo,
  payment,
  eventProductList,
  rankingProduct,
});

export default rootReducer;
