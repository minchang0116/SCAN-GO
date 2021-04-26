import {Image, Text} from 'native-base';
import React, {useState} from 'react';

const EventProduct = () => {
  const [counter, setCounter] = useState(1);
  const onIncrease = () => {
    setCounter(counter + 1);
  };
  return <Text onPress={onIncrease}>{counter}</Text>;
};

export default EventProduct;
