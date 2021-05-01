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
import {useDispatch, useSelector} from 'react-redux';
import {fetchPaymentList} from '../modules/paymentList';
// import DatePicker from 'react-native-date-picker';

const PaymentListPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {paymentList} = useSelector(({paymentList}) => ({
    paymentList: paymentList.paymentList,
  }));
  const [selectedDuration, setSeletedDuration] = useState('최근 3개월');
  const [durationModalVisible, setDurationModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatepicker, setShowStartDataPicker] = useState(false);
  const [showEndDatepicker, setShowEndDataPicker] = useState(false);

  const toggleModal = () => {
    setDurationModalVisible(!durationModalVisible);
  };
  const toggleStartDatePicker = () => {
    setShowStartDataPicker(!showStartDatepicker);
    console.log(showStartDatepicker);
  };
  const toggleEndDatePicker = () => {
    setShowEndDataPicker(!showEndDatepicker);
    console.log(showEndDatepicker);
  };

  useEffect(() => {
    console.log('hi');
    console.log(selectedDuration);
    if (selectedDuration === '기간 설정') {
      toggleModal();
    }
    dispatch(fetchPaymentList());
    paymentList && console.log(paymentList);
  }, [paymentList, selectedDuration]);

  const modalClose = () => {
    let diff = endDate.getTime() - startDate.getTime();
    if (Math.floor(diff / (1000 * 60 * 60 * 24)) < 0) {
      alert('기간 설정이 잘못 되었습니다');
    } else {
      setSeletedDuration('기간 설정');
      toggleModal();
    }
  };

  const onChangeStartDate = (event, selectedDate) => {
    setStartDate(selectedDate);
    toggleStartDatePicker();
  };
  const onChangeEndDate = (event, selectedDate) => {
    setEndDate(selectedDate);
    toggleEndDatePicker();
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
                <Picker.Item label="기간 설정" value="기간 설정" />
              </Picker>
            </Item>
            {/* <TouchableHighlight
              underlayColor="rgb(142, 144, 144)"
              style={styles.button}
              onPress={toggleModal}>
              <Text>기간 설정</Text>
            </TouchableHighlight> */}
          </View>
        </View>
        <Content>
          {paymentList &&
            paymentList.map((item, index) => {
              return <PaymentItem payment={item} key={index} />;
            })}
        </Content>
      </Content>
      <MainFooter navigation={navigation} />

      <Modal
        isVisible={durationModalVisible}
        style={setDurationStyles.modal}
        onBackdropPress={modalClose}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <TouchableHighlight
          underlayColor="transparent"
          style={setDurationStyles.close}
          onPress={modalClose}>
          <IconAntD name="close" size={30} color="rgb(142, 144, 144)" />
        </TouchableHighlight>
        <View style={setDurationStyles.container}>
          <Text style={{marginBottom: 10}}>기간 설정</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight onPress={toggleStartDatePicker}>
              <Text>{startDate.toLocaleDateString()}</Text>
            </TouchableHighlight>
            <IconAntD name="calendar" size={19} color="rgb(0, 0, 0)" />
            <Text style={{paddingLeft: 20, paddingRight: 20}}>~</Text>
            <TouchableHighlight onPress={toggleEndDatePicker}>
              <Text>{endDate.toLocaleDateString()}</Text>
            </TouchableHighlight>
            <IconAntD name="calendar" size={19} color="rgb(0, 0, 0)" />
          </View>
          {showStartDatepicker && (
            <DateTimePicker
              testID="dateTimePicker"
              locale="ko"
              value={startDate}
              mode="date"
              display="spinner"
              onChange={onChangeStartDate}
              onBackdropPress={toggleStartDatePicker}
              minimumDate={new Date(2010, 1, 1)}
              maximumDate={new Date(2022, 12, 31)}
            />
          )}
          {showEndDatepicker && (
            <DateTimePicker
              testID="dateTimePicker"
              locale="ko"
              value={endDate}
              mode="date"
              display="spinner"
              onChange={onChangeEndDate}
              onBackdropPress={toggleEndDatePicker}
              neutralButtonLabel="clear"
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

const setDurationStyles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    marginBottom: '60%',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    marginTop: -50,
  },
  close: {
    paddingTop: '5%',
    paddingLeft: '82%',
  },
});

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 45,
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
});
