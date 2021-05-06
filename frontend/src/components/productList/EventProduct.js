import {Image, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addShoppingListItemByBarcode,
  fetchShoppingList,
  getShoppingList,
} from '../../modules/shoppingList';

const EventProduct = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(fetchShoppingList(1));
    setCounter(counter + 1);
  };

  // useEffect(() => {
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '8992741941303'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '90020940'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '9002490100070'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '90087172'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '90153426'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '9555030107010'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '9556296317205'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '9338201001009'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '8993083938617'},
  //     }),
  //   );
  //   dispatch(
  //     addShoppingListItemByBarcode({
  //       formData: {memberId: 1, prodCode: '8938507849032'},
  //     }),
  //   );
  // }, []);
  return (
    <View>
      <View>
        <Text onPress={onIncrease}>{counter}</Text>
      </View>
    </View>
  );
};

export default EventProduct;
