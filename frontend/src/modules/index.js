import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import product from './product';
// import shoppingListItem from './shoppingListItem';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  product,
});

export default rootReducer;
