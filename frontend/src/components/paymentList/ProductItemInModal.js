/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';
import AppText from '../common/AppText';

const ProductItemInModal = ({item}) => {
  return (
    <>
      <Text>안녕</Text>
      {/* <AppText numberOfLines={1} ellipsizeMode="tail" style={{width: '80%'}}>
        {item.prodName}
      </AppText>
      <AppText
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{fontSize: 14, width: '20%'}}>
        {item.prodPrice}원 · {item.qty}개
      </AppText> */}
    </>
  );
};

export default ProductItemInModal;

// const styles = StyleSheet.create({
//   wrap: {
//     width: '100%',
//     height: '100%',
//     paddingRight: 8,
//     paddingLeft: 8,
//     // marginBottom: -50,
//   },
//   productInfo: {
//     width: '100%',
//     flexDirection: 'row',
//     // height: '50%',
//   },
// });
