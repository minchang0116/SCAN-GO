import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Body, Header, Left, Right, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './AppText';

const SubHeader = ({title, navigation, isIcon = true}) => {
  return (
    <Header androidStatusBarColor={'rgb(240,41,28)'} style={styles.header}>
      <Left>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Icon style={styles.fontColor1} name="arrow-back" />
        </TouchableOpacity>
      </Left>
      <Body>
        <AppText style={styles.fontColor2}>{title}</AppText>
      </Body>
      <Right>
        {isIcon && (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MainPage')}>
              <Icon style={styles.icon} name="home-outline" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('BarcodeScanningPage')}>
              <Icon style={styles.icon} name="camera-outline" />
            </TouchableOpacity>
          </>
        )}
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 4,
    backgroundColor: 'white',
    height: 45,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontColor1: {
    fontSize: 20,
    color: 'black',
  },
  fontColor2: {
    color: 'black',
  },
  icon: {
    fontSize: 23,
    color: 'black',
  },
});
export default SubHeader;
