import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TestItem = ({num}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRightWidth: 1,
    height: 80,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 50,
  },
});

export default TestItem;