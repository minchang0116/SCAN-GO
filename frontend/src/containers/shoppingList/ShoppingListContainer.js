import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ShoppingListFooter from '../../components/shoppingList/ShoppingListFooter';
import ShoppingListForm from '../../components/shoppingList/ShoppingListForm';
import {
  deleteShoppingListItem,
  fetchShoppingList,
} from '../../modules/shoppingList';

const ShoppingListContainer = ({navigation}) => {
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
  }, []);
  return (
    <>
      <ShoppingListForm
        shoppingList={shoppingList}
        onDeleteShoppingListItem={onDeleteShoppingListItem}
      />
      <ShoppingListFooter
        navigation={navigation}
        shoppingList={shoppingList}
        sumPrice={shoppingList.sumPrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      />
    </>
  );
};

export default ShoppingListContainer;
