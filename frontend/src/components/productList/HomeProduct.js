import {useNavigation} from '@react-navigation/core';
import {View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useDispatch} from 'react-redux';
import * as mainPageApi from '../../lib/api/mainPage';
import {saveEventDetail} from '../../modules/eventProductList';

const HomeProduct = () => {
  const navigation = useNavigation();
  const [eventList, setEventList] = useState('');
  const dispatch = useDispatch();
  const readEvents = async () => {
    const response = await mainPageApi.readEvents();
    setEventList(response.data);
  };

  const onEventDetail = item => {
    dispatch(saveEventDetail(item.bigImage));
    navigation.navigate('EventDetailPage');
  };

  useEffect(() => {
    readEvents();
  }, []);

  return (
    <>
      <SwiperFlatList
        showPagination
        paginationStyleItem={{width: 10, height: 10}}>
        {eventList &&
          eventList.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                onEventDetail(item);
              }}>
              <View style={[styles.child]}>
                <Image style={styles.image} source={{uri: item.smallImage}} />
              </View>
            </TouchableOpacity>
          ))}
      </SwiperFlatList>
    </>
  );
};

export default HomeProduct;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 1,
  },
  title: {
    marginVertical: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
