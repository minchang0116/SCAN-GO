/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {CardItem, Text, Body, Thumbnail} from 'native-base';

const ProductItem = ({item}) => {
  return (
    <>
      <CardItem>
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
          <Text>
            {item.prodPrice}원 · {item.qty}개
          </Text>
        </Body>
      </CardItem>
    </>
  );
};

export default ProductItem;
