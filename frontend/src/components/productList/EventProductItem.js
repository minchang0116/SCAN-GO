import React from 'react';
import {Text, Body, Thumbnail} from 'native-base';
import {View} from 'react-native';

const EventProductItem = ({item}) => {
  return (
    <>
      <View>
        <Thumbnail
          square
          source={{
            uri:
              'http://image3.compuzone.co.kr/img/product_img/2021/0219/764689/764689_600.jpg',
          }}
          style={{flexDirection: 'row'}}
        />
        <Body style={{marginLeft: 15}}>
          <Text style={{marginBottom: 5}}>{item.prodName}</Text>
          <Text>{item.prodPrice}원</Text>
        </Body>
      </View>
    </>
  );
};

export default EventProductItem;
