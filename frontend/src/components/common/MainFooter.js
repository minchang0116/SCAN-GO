import {Footer, FooterTab} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import IconFntAwesome from 'react-native-vector-icons/FontAwesome5';
import IconAntD from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MainFooter = ({navigation}) => {
  const [currentPosition, setName] = useState('');
  const naviHandler = position => {
    setName(position);
  };

  return (
    <Footer>
      <FooterTab style={styles.container}>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            navigation.navigate('MainPage');
          }}>
          <IconFntAwesome name="home" size={30} color="rgb(91, 103, 112)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            navigation.navigate('PaymentList');
          }}>
          <IconFntAwesome
            name="clipboard"
            size={30}
            color="rgb(91, 103, 112)"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochableRadius}
          onPress={() => {
            navigation.navigate('BarcodeScanningPage');
          }}>
          <IconMaterial name="barcode-scan" size={55} color="rgb(218,41,28)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            naviHandler('shoppingList');
            navigation.navigate('ShoppingListPage');
          }}>
          <IconAntD name="shoppingcart" size={33} color="rgb(91, 103, 112)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            navigation.navigate('PaymentList');
          }}>
          <IconFntAwesome
            name="user-circle"
            size={32}
            color="rgb(91, 103, 112)"
          />
        </TouchableOpacity>
      </FooterTab>
    </Footer>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'rgb(226,226,226)',
    backgroundColor: 'white',
  },
  tochablePosition: {
    width: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tochableRadius: {
    height: 80,
    width: 73,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150/2,
    zIndex: 10 ,
  },
});
