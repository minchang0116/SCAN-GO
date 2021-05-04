/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps*/
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {Content, Item, Text} from 'native-base';
import {Picker} from '@react-native-picker/picker';
import PaymentItem from '../../components/paymentList/PaymentItem';
import {fetchPaymentList} from '../../modules/paymentList';
import SetDurationModal from '../../components/paymentList/SetDurationModal';

const PaymentListContainer = () => {
  const dispatch = useDispatch();
  const {paymentList} = useSelector(({paymentList}) => ({
    paymentList: paymentList.paymentList,
  }));
  const [selectedDuration, setSeletedDuration] = useState('최근 3개월');
  const [durationModalVisible, setDurationModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDatePass, setIsDatePass] = useState(true);
  const toggleModal = () => {
    setDurationModalVisible(!durationModalVisible);
  };
  useEffect(() => {
    console.log('기간 변경됨');
    let date1 = new Date();
    let date2 = new Date();
    switch (selectedDuration) {
      case '기간 설정':
        return;
      case '최근 3개월':
        date1.setMonth(date1.getMonth() - 3);
        break;
      case '최근 6개월':
        date1.setMonth(date1.getMonth() - 6);
        break;
      case '최근 9개월':
        date1.setMonth(date1.getMonth() - 9);
        break;
      case '최근 12개월':
        date1.setFullYear(date1.getFullYear() - 1);
        break;
    }
    const formData = {
      memberId: 1,
      date1:
        date1.getFullYear() + '-' + (date1.getMonth() + 1) + date1.getDate(),
      date2:
        date2.getFullYear() + '-' + (date2.getMonth() + 1) + date2.getDate(),
      pageNum: 0,
    };
    dispatch(fetchPaymentList(formData));
  }, [selectedDuration]);

  useEffect(() => {
    if (
      selectedDuration !== '기간 설정' ||
      !isDatePass ||
      durationModalVisible
    ) {
      return;
    }
    console.log(
      '기간설정 : ' +
        startDate.toLocaleDateString() +
        '~' +
        endDate.toLocaleDateString(),
    );
    const formData = {
      memberId: 1,
      date1:
        startDate.getFullYear() +
        '-' +
        (startDate.getMonth() + 1) +
        startDate.getDate(),
      date2:
        endDate.getFullYear() +
        '-' +
        (endDate.getMonth() + 1) +
        endDate.getDate(),
      pageNum: 0,
    };
    dispatch(fetchPaymentList(formData));
  }, [toggleModal]);

  return (
    <>
      <Content>
        <View style={styles.headerContainer}>
          <View style={styles.headerElem}>
            <Item picker>
              <Picker
                mode="dropdown"
                style={[{width: '70%'}]}
                selectedValue={selectedDuration}
                onValueChange={itemValue => setSeletedDuration(itemValue)}>
                <Picker.Item label="최근 3개월" value="최근 3개월" />
                <Picker.Item label="최근 6개월" value="최근 6개월" />
                <Picker.Item label="최근 9개월" value="최근 9개월" />
                <Picker.Item label="최근 12개월" value="최근 12개월" />
                {/* <Picker.Item label="기간 설정" value="기간 설정" /> */}
              </Picker>
            </Item>
            <TouchableHighlight
              underlayColor="rgb(142, 144, 144)"
              style={styles.button}
              onPress={() => {
                setSeletedDuration('기간 설정');
                toggleModal();
              }}>
              <Text>기간 설정</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Content>
          {paymentList &&
            paymentList.map((item, index) => {
              return <PaymentItem payment={item} key={index} />;
            })}
        </Content>
      </Content>
      <SetDurationModal
        toggleModal={toggleModal}
        durationModalVisible={durationModalVisible}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        isDatePass={isDatePass}
        setIsDatePass={setIsDatePass}
      />
    </>
  );
};

export default PaymentListContainer;

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
