/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {Container, Content, Item, Text} from 'native-base';
import Modal from 'react-native-modal';
import IconAntD from 'react-native-vector-icons/AntDesign';
import DatePicker from './DatePicker';

const SetDurationModal = ({
  toggleModal,
  durationModalVisible,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isDatePass,
  setIsDatePass,
}) => {
  const [showStartDatepicker, setShowStartDataPicker] = useState(false);
  const [showEndDatepicker, setShowEndDataPicker] = useState(false);

  const toggleStartDatePicker = () => {
    setShowStartDataPicker(!showStartDatepicker);
    console.log(showStartDatepicker);
  };
  const toggleEndDatePicker = () => {
    setShowEndDataPicker(!showEndDatepicker);
    console.log(showEndDatepicker);
  };

  useEffect(() => {
    let diff = endDate.getTime() - startDate.getTime();
    if (Math.floor(diff / (1000 * 60 * 60 * 24)) < 0) {
      setIsDatePass(false);
      console.log('isDatePass:' + isDatePass);
    } else {
      setIsDatePass(true);
      console.log('isDatePass:' + isDatePass);
    }
  }, [startDate, endDate]);

  const modalClose = () => {
    if (!isDatePass) {
      alert('기간 설정이 잘못 되었습니다');
    } else {
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
            <Text>{startDate && startDate.toLocaleDateString()}</Text>
          </TouchableHighlight>
          <IconAntD name="calendar" size={19} color="rgb(0, 0, 0)" />
          <Text style={{paddingLeft: 20, paddingRight: 20}}>~</Text>
          <TouchableHighlight onPress={toggleEndDatePicker}>
            <Text>{endDate && endDate.toLocaleDateString()}</Text>
          </TouchableHighlight>
          <IconAntD name="calendar" size={19} color="rgb(0, 0, 0)" />
        </View>
        {showStartDatepicker && (
          <DatePicker
            date={startDate}
            onChangeDate={onChangeStartDate}
            toggleDatePicker={toggleStartDatePicker}
          />
        )}
        {showEndDatepicker && (
          <DatePicker
            date={endDate}
            onChangeDate={onChangeEndDate}
            toggleDatePicker={toggleEndDatePicker}
          />
        )}
      </View>
    </Modal>
  );
};

export default SetDurationModal;

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
