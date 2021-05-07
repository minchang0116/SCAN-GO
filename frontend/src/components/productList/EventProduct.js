import {Text, View} from 'native-base';
import React, {useState} from 'react';

const EventProduct = () => {
  const [counter, setCounter] = useState(1);
  const onIncrease = () => {
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
