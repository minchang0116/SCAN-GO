import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import EventProductItem from './EventProductItem';
import AppText from '../common/AppText';

const EventProduct = () => {
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
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <View>
            <AppText style={styles.title}>오늘의 1+1 행사 상품</AppText>
            <AppText style={styles.subTitle}>
              상품 하나 사면 하나 더 드려요!
            </AppText>
          </View>
          <View>
            <FlatList
              style={styles.scrollContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={items}
              keyExtractor={item => item.id}
              renderItem={({item}) => <EventProductItem item={item} />}
              ListFooterComponent={
                <View>
                  <AppText style={{fontSize: 20}}>끝</AppText>
                </View>
              }
            />
          </View>
        </View>
        <View style={styles.subContainer}>
          <View>
            <AppText style={styles.title}>할인 행사 상품</AppText>
            <AppText style={styles.subTitle}>
              상품을 할인된 가격에 만나보세요!
            </AppText>
          </View>
          <View>
            <FlatList
              style={styles.scrollContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={items}
              keyExtractor={item => item.id}
              renderItem={({item}) => <EventProductItem item={item} />}
              ListFooterComponent={
                <View>
                  <Text style={{fontSize: 20}}>끝</Text>
                </View>
              }
            />
          </View>
        </View>
        <View style={styles.subContainer}>
          <View>
            <AppText style={styles.title}>덤 증정 상품</AppText>
            <AppText style={styles.subTitle}>
              상품을 구매하면 다른 물품이 덤!
            </AppText>
          </View>
          <View>
            <FlatList
              style={styles.scrollContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={items}
              keyExtractor={item => item.id}
              renderItem={({item}) => <EventProductItem item={item} />}
              ListFooterComponent={
                <View>
                  <Text style={{fontSize: 20}}>끝</Text>
                </View>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default EventProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  subContainer: {
    marginBottom: '15%',
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
