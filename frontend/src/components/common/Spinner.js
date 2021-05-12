import {Spinner} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const spinner = () => {
  return <Spinner color="red" style={styles.spinner} />;
};

export default spinner;

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    zIndex: 5,
  },
});
