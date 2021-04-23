import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Body, Header, Left, Right, Text, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const MainHeader = ({title}) => {
  return (
    <Header style={styles.header}>
      <Text style={styles.font}>SSG/셀프스토어</Text>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: 'rgb(240,41,28)',
    height: 45,
  },
  font: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default MainHeader;
