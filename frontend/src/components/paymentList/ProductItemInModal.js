/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../common/AppText';
import {Thumbnail} from 'native-base';

const ProductItemInModal = ({product}) => {
  return (
    <>
      <View style={styles.wrap}>
        <Thumbnail
          square
          large
          source={{
            uri:
              'http://image3.compuzone.co.kr/img/product_img/2021/0219/764689/764689_600.jpg',
          }}
        />
        <AppText numberOfLines={2} ellipsizeMode="tail" style={styles.font14}>
          {product.item.prodName}
        </AppText>
        <AppText
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{...styles.font14, marginTop: 5}}>
          {parseInt(product.item.prodPrice, 10).toLocaleString()}원 ·{' '}
          {product.item.qty}개
        </AppText>
      </View>
    </>
  );
};

export default ProductItemInModal;

const styles = StyleSheet.create({
  wrap: {
    width: '33.33%',
    height: '100%',
    paddingRight: 8,
    paddingLeft: 8,
    // marginBottom: -50,
  },
  font14: {
    fontSize: 14,
  },
});
