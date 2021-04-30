/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import SubHeader from '../components/common/SubHeader';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {Container, Content, Item, Text} from 'native-base';
import {Picker} from '@react-native-picker/picker';
import PaymentItem from '../components/payment/PaymentItem';
import MainFooter from '../components/common/MainFooter';
import Modal from 'react-native-modal';
import IconAntD from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-date-picker';

const PaymentListPage = ({navigation}) => {
  const [selectedDuration, setSeletedDuration] = useState('최근 3개월');
  const [durationModalVisible, setDurationModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatepicker, setShowDataPicker] = useState(false);

  const toggleModal = () => {
    setDurationModalVisible(!durationModalVisible);
  };
  const toggleDatePicker = () => {
    setShowDataPicker(!showDatepicker);
  };

  useEffect(() => {
    console.log(selectedDuration);
  }, [selectedDuration]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <>
      <SubHeader title={'나의 결제내역'} navigation={navigation} />
      <Content>
        <View style={styles.headerContainer}>
          <View style={styles.headerElem}>
            <Item picker>
              <Picker
                mode="dropdown"
                style={[{width: '70%'}]}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={selectedDuration}
                onValueChange={itemValue => setSeletedDuration(itemValue)}>
                <Picker.Item label="최근 3개월" value="최근 3개월" />
                <Picker.Item label="최근 6개월" value="최근 6개월" />
                <Picker.Item label="최근 9개월" value="최근 9개월" />
                <Picker.Item label="최근 12개월" value="최근 12개월" />
              </Picker>
            </Item>
            <TouchableHighlight
              underlayColor="rgb(142, 144, 144)"
              style={styles.button}
              onPress={toggleModal}>
              <Text>기간 설정</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Content>
          {paymentList.map((item, index) => {
            return <PaymentItem payment={item} key={index} />;
          })}
        </Content>
      </Content>
      <MainFooter navigation={navigation} />

      <Modal
        isVisible={durationModalVisible}
        style={styles.modal}
        onBackdropPress={toggleModal}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.close}
          onPress={toggleModal}>
          <IconAntD name="close" size={30} color="rgb(142, 144, 144)" />
        </TouchableHighlight>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            height: 300,
          }}>
          <View>
            <TouchableHighlight onPress={toggleDatePicker}>
              <Text>Show date picker!</Text>
            </TouchableHighlight>
            <Text>{date}</Text>
          </View>
          {showDatepicker && (
            <DateTimePicker
              testID="dateTimePicker"
              locale="ko"
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
              onBackdropPress={toggleDatePicker}
              minimumDate={new Date(2010, 1, 1)}
              maximumDate={new Date(2022, 12, 31)}
            />
          )}
        </View>
      </Modal>
    </>
  );
};

export default PaymentListPage;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  headerElem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '20%',
    color: 'rgb(142, 144, 144)',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
    marginBottom: '40%',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
  },
  close: {
    marginTop: '5%',
    marginLeft: '82%',
  },
});

const paymentList = [
  {
    date: '2021.04.18',
    orderNo: '2021-04-18-D67DD4',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        id: 1,
        name: '페퍼리지팜)밀라노170gdfdfsfdsf',
        price: '10,000',
        qty: '2',
      },
      {
        id: 2,
        name: '페퍼리지팜)밀라노fdsfssdsfs170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 3,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 4,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 5,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 6,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 7,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 8,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 9,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        id: 10,
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
  {
    date: '2021.04.19',
    orderNo: '2021-04-18-811157',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
  {
    date: '2021.04.20',
    orderNo: '2021-04-18-811157',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
  {
    date: '2021.04.21',
    orderNo: '2021-04-18-811157',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
];
