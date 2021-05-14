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
          style={styles.prodImage}
        />
        <Body style={{marginLeft: 15}}>
          <AppText style={{marginBottom: 5, ...styles.font14}}>
            {product.prodName}
          </AppText>
          <AppText style={styles.font14}>
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
  font14: {
    fontSize: 14,
  },
  prodImage: {
    flexDirection: 'row',
    width: 50,
    height: 50,
  },
});
