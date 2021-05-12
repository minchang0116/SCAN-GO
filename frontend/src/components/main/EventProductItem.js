/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Thumbnail} from 'native-base';
import {View, StyleSheet} from 'react-native';
import AppText from '../common/AppText';

const EventProductItem = ({item}) => {
  return (
    <>
      <View style={styles.wrap}>
        <Thumbnail
          square
          large
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <AppText numberOfLines={2} ellipsizeMode="tail">
          {item.prodName}
        </AppText>
        {item.prodSalePrice && (
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 10,
              marginTop: 5,
              textDecorationLine: 'line-through',
              color: 'rgb(144,144,144)',
            }}>
            {item.prodPrice}원
          </AppText>
        )}
        {item.prodPrice && (
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{fontSize: 14, marginTop: 5}}>
            {item.prodSalePrice ? item.prodSalePrice : item.prodPrice}원
          </AppText>
        )}
      </View>
    </>
  );
};

export default EventProductItem;

const styles = StyleSheet.create({
  wrap: {
    width: 150,
    height: '100%',
    paddingRight: 8,
    paddingLeft: 8,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
