import {Image, Text, View} from 'native-base';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchShoppingList, getShoppingList} from '../../modules/shoppingList';

const EventProduct = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(fetchShoppingList(1));
    setCounter(counter + 1);
  };
  return (
    <View>
      <View>
        <Text onPress={onIncrease}>{counter}</Text>
      </View>
    </View>
  );
};

export default EventProduct;
