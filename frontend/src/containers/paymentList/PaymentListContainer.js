/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps*/
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {Content} from 'native-base';

import PaymentItem from '../../components/paymentList/PaymentItem';
import {fetchPaymentList} from '../../modules/paymentList';
import SetDurationPicker from '../../components/paymentList/SetDurationPicker';
import SetDuration from '../../components/paymentList/SetDuration';

const PaymentListContainer = () => {
  const dispatch = useDispatch();
  const {paymentList, loading} = useSelector(({paymentList}) => ({
    paymentList: paymentList.paymentList,
    loading: paymentList.loading,
  }));
  const [selectedDuration, setSeletedDuration] = useState('최근 3개월');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [page, setPage] = useState(0);

  const changeDateFormat = date => {
    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    );
  };

  useEffect(() => {
    console.log('기간 picker 변경됨');
    let date1 = new Date();
    switch (selectedDuration) {
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
    setStartDate(date1);
    setEndDate(new Date());
  }, [selectedDuration]);

  useEffect(() => {
    if (!startDate || !endDate) {
      return;
    }
    console.log('startDate:' + startDate);
    console.log('endDate:' + endDate);
    const formData = {
      memberId: 1,
      date1: changeDateFormat(startDate),
      date2: changeDateFormat(endDate),
      pageNum: page,
    };

    dispatch(fetchPaymentList(formData));
  }, [startDate, endDate]);

  return (
    <SafeAreaView style={styles.container}>
      <Content>
        <SetDurationPicker
          selectedDuration={selectedDuration}
          setSeletedDuration={setSeletedDuration}
        />
        <SetDuration
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        {/* <FlatList> */}
        {paymentList &&
          paymentList.map((payment, index) => {
            return <PaymentItem payment={payment} key={index} />;
          })}
        {/* </FlatList> */}
      </Content>
    </SafeAreaView>
  );
};

export default PaymentListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
