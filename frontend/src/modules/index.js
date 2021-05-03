import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import payment from './payment';
// import shoppingListItem from './shoppingListItem';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
  loading,
  shoppingList,
  payment,
});

export default rootReducer;
