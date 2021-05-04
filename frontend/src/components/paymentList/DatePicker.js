import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({date, onChangeDate, toggleDatePicker}) => {
  return (
    <DateTimePicker
      testID="dateTimePicker"
      locale="ko"
      value={date}
      mode="date"
      display="spinner"
      onChange={onChangeDate}
      onBackdropPress={toggleDatePicker}
      minimumDate={new Date(2010, 1, 1)}
      maximumDate={new Date(2022, 12, 31)}
    />
  );
};

export default DatePicker;
