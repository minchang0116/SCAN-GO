/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Content, Item} from 'native-base';
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
  const toggleModal = () => {
    setDurationModalVisible(!durationModalVisible);
  };
  useEffect(() => {
    console.log('기간 변경됨');
    let date1 = new Date();
    let date2 = new Date();
    switch (selectedDuration) {
      case '기간 설정':
        toggleModal();
        break;
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

  return (
    <>
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
        setSeletedDuration={setSeletedDuration}
        toggleModal={toggleModal}
        durationModalVisible={durationModalVisible}
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
