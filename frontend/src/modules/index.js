import {combineReducers} from 'redux';
import loading from './loading';
// import shoppingList from './shoppingList';

const rootReducer = combineReducers({
  loading,
});
export default rootReducer;
