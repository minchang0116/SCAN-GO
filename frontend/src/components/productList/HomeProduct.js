import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import EventItem from './EventItem';
import AppText from '../common/AppText';

const HomeProduct = () => {
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
      <View style={styles.container}>
        <AppText style={styles.title}>이벤트</AppText>
        <AppText style={styles.subTitle}>이번 주 이벤트 놓치지 마세요!</AppText>
        <FlatList
          style={styles.scrollContainer}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({item}) => <EventItem item={item} />}></FlatList>
      </View>
    </>
  );
};

export default HomeProduct;

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
