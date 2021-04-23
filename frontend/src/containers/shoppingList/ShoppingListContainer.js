import React, {useState} from 'react';
import ShoppingListForm from '../../components/shoppingList/ShoppingListForm';

const ShoppingListContainer = () => {
  return (
    <>
      <ShoppingListForm shoppingList={shoppingList} />
    </>
  );
};

const shoppingList = [
  {
    no: 1,
    productName: '랭거스)크랜베리페트449ml',
    imgUrl: require('../../../imgs/랭거스)크랜베리페트449ml.jpg'),
    productPrice: '2800',
    count: 1,
  },
  {
    no: 2,
    productName: '롯데)오늘의차황금보리500ml',
    imgUrl: require('../../../imgs/롯데)오늘의차황금보리500ml.jpg'),
    productPrice: '1500',
    count: 2,
  },
];

export default ShoppingListContainer;
