import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ProductItem from './ProductItem';
import AppText from '../common/AppText';

const PopularProduct = () => {
  const items = [
    {
      id: 1,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 2,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 3,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 4,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 5,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 6,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 7,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 8,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 9,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 10,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 11,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 12,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 13,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 14,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
    {
      id: 15,
      prodName: '테스트입니다',
      prodPrice: 10000,
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <AppText style={styles.title}>인기 상품</AppText>
        <AppText style={styles.subTitle}>
          이번 주 가장 인기있는 상품을 만나보세요!
        </AppText>
        <FlatList
          style={styles.scrollContainer}
          vertical
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductItem item={item} />}
          numColumns={2}></FlatList>
      </SafeAreaView>
    </>
  );
};

export default PopularProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  subTitle: {
    fontSize: 12,
    color: 'rgb(100,100,100)',
  },
  scrollContainer: {
    marginTop: '3%',
    marginBottom: '7%',
  },
});
