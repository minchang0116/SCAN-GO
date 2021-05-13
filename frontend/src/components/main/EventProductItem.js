/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Thumbnail} from 'native-base';
import {View, StyleSheet} from 'react-native';
import AppText from '../common/AppText';

const EventProductItem = ({item, home}) => {
  return (
    <>
      <View style={styles.wrap}>
        <Thumbnail
          square
          large
          style={styles.image}
          source={{
            uri: (home ? 'data:image/png;base64,' : '') + item.image,
          }}
        />
        <AppText numberOfLines={2} ellipsizeMode="tail" style={styles.prodName}>
          {item.prodName}
        </AppText>
        {item.prodSalePrice && (
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.prodPrice}>
            {item.prodPrice}원
          </AppText>
        )}
        {item.prodPrice && (
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.prodSalePrice}>
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
    width: 140,
    height: 150,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  prodName: {
    fontSize: 12,
    width: 140,
    height: 35,
  },
  prodPrice: {
    fontSize: 10,
    marginTop: 5,
    textDecorationLine: 'line-through',
    color: 'rgb(144,144,144)',
  },
  prodSalePrice: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '700',
  },
});
