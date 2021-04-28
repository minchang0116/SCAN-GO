import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ShoppingListForm from '../../components/shoppingList/ShoppingListForm';
import {
  fetchShoppingList,
  increaseShoppingListItem,
  decreaseShoppingListItem,
  deleteShoppingListItem,
} from '../../modules/shoppingList';

const ShoppingListContainer = () => {
  const {shoppingList} = useSelector(({shoppingList}) => ({
    shoppingList: shoppingList,
  }));

  const dispatch = useDispatch();
  const onFetchShoppingList = () => {
    dispatch(fetchShoppingList());
  };
  const onIncreaseShoppingListItem = () => {
    dispatch(increaseShoppingListItem());
  };
  const onDecreaseShoppingListItem = () => {
    dispatch(decreaseShoppingListItem());
  };
  const onDeleteShoppingListItem = () => {
    dispatch(deleteShoppingListItem());
  };

  useEffect(() => {
    onFetchShoppingList();
  }, []);

  return (
    <>
      <ShoppingListForm
        shoppingList={shoppingList.shoppingList}
        onFetchShoppingList={onFetchShoppingList}
        onIncreaseShoppingListItem={onIncreaseShoppingListItem}
        onDecreaseShoppingListItem={onDecreaseShoppingListItem}
        onDeleteShoppingListItem={onDeleteShoppingListItem}
      />
    </>
  );
};

export default ShoppingListContainer;
