/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import IconAntD from 'react-native-vector-icons/AntDesign';
import ProductItemInModal from './ProductItemInModal';
import {Card, CardItem} from 'native-base';
import AppText from '../common/AppText';

const DetailModal = ({isModalVisible, toggleModal, payment}) => {
  console.log(payment.paymentDetail);
  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.detail}
      onBackdropPress={toggleModal}
      animationIn="zoomIn"
      animationOut="zoomOut">
      <View style={{flex: 1, width: '100%'}}>
        <Card>
          <CardItem header style={styles.header}>
            <AppText style={{fontWeight: '700', fontSize: 22}}>
              {payment.txDateTime.slice(0, 10)}
              <AppText style={{fontWeight: '400'}}>
                &nbsp;&nbsp;({payment.id})
              </AppText>
            </AppText>
            <TouchableOpacity
              underlayColor="transparent"
              style={styles.close}
              onPress={toggleModal}>
              <IconAntD name="close" size={30} color="rgb(142, 144, 144)" />
            </TouchableOpacity>
          </CardItem>
        </Card>
        <FlatList
          data={payment.paymentDetail}
          renderItem={({item}) => (
            <ProductItemInModal item={item} key={item.prodId} />
          )}
          numColumns={3}
        />
      </View>
    </Modal>
  );
};

export default DetailModal;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomColor: 'rgb(213, 213, 213)',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  thumbnail: {
    flexDirection: 'row',
    borderRadius: 6,
  },
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '30%',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
  },
  close: {
    position: 'absolute',
    left: '100%',
  },
});
