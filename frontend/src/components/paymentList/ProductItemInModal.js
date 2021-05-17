/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../common/AppText';
import {Thumbnail} from 'native-base';

const ProductItemInModal = ({product}) => {
  console.log(product);
  return (
    <>
      <View style={styles.wrap}>
        <Thumbnail
          square
          style={styles.prodImage}
          source={{
            uri: 'data:image/png;base64,' + product.item.prodImage,
          }}
        />
        <View style={styles.prodInfo}>
          <AppText
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{...styles.font12, ...styles.prodName}}>
            {product.item.prodName}
          </AppText>
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{...styles.font12, ...styles.prodPrice}}>
            {Number(product.item.prodPrice).toLocaleString()}원 ·{' '}
            {product.item.qty}개
          </AppText>
        </View>
      </View>
    </>
  );
};

export default ProductItemInModal;

const styles = StyleSheet.create({
  wrap: {
    width: '30%',
    height: 160,
    marginHorizontal: 5,
    paddingRight: 8,
    paddingLeft: 8,
    marginBottom: 15,
  },
  font12: {
    fontSize: 12,
  },
  prodImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 100,
  },
  prodInfo: {
    marginTop: 5,
    height: 50,
  },
  prodName: {
    height: 30,
  },
  prodPrice: {
    marginTop: 5,
    fontWeight: '700',
  },
});
