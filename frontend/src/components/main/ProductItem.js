/* eslint-disable react-native/no-inline-styles */
import {Thumbnail} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../common/AppText';

const ProductItem = ({item, rank}) => {
  return (
    <>
      <View style={styles.wrap}>
        <View style={styles.badge}>
          <AppText style={{color: 'white'}}>{rank}</AppText>
        </View>
        <Thumbnail
          square
          style={styles.image}
          source={{
            uri: 'data:image/png;base64,' + item.image,
          }}
        />
        <AppText numberOfLines={2} ellipsizeMode="tail">
          {item.prodName}
        </AppText>
      </View>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    // width: Dimensions.get('window').width / 2,
    paddingRight: 8,
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: 'rgb(240,41,28)',
    color: 'white',
    position: 'absolute',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    right: '88%',
    bottom: '85%',
    zIndex: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
