import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Body, Header, Left, Right, Text, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const MainHeader = ({title}) => {
  return (
    <Header style={styles.header}>
      <Text style={styles.font}>SSG/ </Text>
      <Text style={styles.font2}>셀프스토어</Text>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(240,41,28)',
    height: 45,
    position: 'relative',
  },
  font: {
    fontSize: 20,
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  font2: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default MainHeader;
