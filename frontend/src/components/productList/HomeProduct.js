import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ProductItem from './ProductItem';

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
  ];
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>행사 상품</Text>
          <Text style={styles.subTitle}>
            이번 주 행사중인 상품을 만나보세요
          </Text>
        </View>
        <View>
          <FlatList
            style={styles.scrollContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ProductItem item={item} />}
            ListFooterComponent={
              <View>
                <Text style={{fontSize: 20}}>끝</Text>
              </View>
            }
          />
        </View>
        <View>
          <Text style={styles.title}>인기 상품</Text>
          <Text style={styles.subTitle}>인기있는 상품을 둘러보세요!</Text>
        </View>
        <View>
          <FlatList
            style={styles.scrollContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ProductItem item={item} />}
            ListFooterComponent={
              <View>
                <Text style={{fontSize: 20}}>끝</Text>
              </View>
            }
          />
        </View>
        <View>
          <Text style={styles.title}>새 상품</Text>
          <Text style={styles.subTitle}>새로 들어온 상품이에요</Text>
        </View>
        <View>
          <FlatList
            style={styles.scrollContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ProductItem item={item} />}
            ListFooterComponent={
              <View>
                <Text style={{fontSize: 20}}>끝</Text>
              </View>
            }
          />
        </View>
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
