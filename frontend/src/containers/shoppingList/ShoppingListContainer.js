import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ShoppingListFooter from '../../components/shoppingList/ShoppingListFooter';
import ShoppingListForm from '../../components/shoppingList/ShoppingListForm';
import {
  addShoppingListItemByBarcode,
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
  useEffect(() => {
    dispatch(addShoppingListItemByBarcode({prodCode: '8992741941303'}));
    dispatch(addShoppingListItemByBarcode({prodCode: '90020940'}));
  }, []);

  useEffect(() => {
    console.log('렌더링 몇번');
    onFetchShoppingList();
  }, []);
  return (
    <>
      <ShoppingListForm shoppingList={shoppingList} />
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
