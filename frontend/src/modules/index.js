import {combineReducers} from 'redux';
import loading from './loading';
import shoppingList from './shoppingList';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
  loading,
  shoppingList,
});

export default rootReducer;
