import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ShoppingListFooter from '../../components/shoppingList/ShoppingListFooter';
import ShoppingListForm from '../../components/shoppingList/ShoppingListForm';
import {
  fetchShoppingList,
  updateShoppingListItem,
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

  const onDeleteShoppingListItem = () => {
    dispatch(deleteShoppingListItem());
  };

  useEffect(() => {
    onFetchShoppingList();
  }, [dispatch]);
  console.log('쇼핑리스트 컨테이너 렌더링');
  return (
    <>
      <ShoppingListForm
        shoppingList={shoppingList.shoppingList}
        onFetchShoppingList={onFetchShoppingList}
        onDeleteShoppingListItem={onDeleteShoppingListItem}
      />
      <ShoppingListFooter shoppingList={shoppingList.shoppingList} />
    </>
  );
};

export default ShoppingListContainer;
