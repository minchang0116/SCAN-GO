/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {CardItem, Body, Thumbnail} from 'native-base';
import AppText from '../common/AppText';

const ProductItem = ({product}) => {
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
          <AppText style={{marginBottom: 5}}>{product.prodName}</AppText>
          <AppText>
            {parseInt(product.prodPrice, 10).toLocaleString()}원 · {product.qty}
            개
          </AppText>
        </Body>
      </CardItem>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  font15: {
    fontSize: 15,
  },
});
