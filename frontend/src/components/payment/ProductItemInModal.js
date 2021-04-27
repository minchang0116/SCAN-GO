/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Container, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const ProductItemInModal = ({item}) => {
  return (
    <>
      <View style={styles.wrap}>
        <Image
          style={styles.productImg}
          source={{
            uri:
              'http://image3.compuzone.co.kr/img/product_img/2021/0219/764689/764689_600.jpg',
          }}
        />
        <View style={styles.productInfo}>
          <Text numberOfLines={2} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 14}}>
            {item.price}원 · {item.qty}개
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProductItemInModal;

const styles = StyleSheet.create({
  wrap: {
    width: '33.33%',
    height: 250,
    paddingRight: 8,
    paddingLeft: 8,
    marginBottom: -50,
  },
  productImg: {
    height: '50%',
  },
  productInfo: {
    height: '50%',
  },
});
