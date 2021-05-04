import {Footer, FooterTab} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import IconFntAwesome from 'react-native-vector-icons/FontAwesome5';
import IconAntD from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MainFooter = ({navigation}) => {
  return (
    <Footer style={{height: 65, backgroundColor: 'white'}}>
      <FooterTab style={styles.container}>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            navigation.navigate('MainPage');
          }}>
          <IconFntAwesome name="home" size={30} color="rgb(91, 103, 112)" />
          <Text>홈</Text>
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
          <Text>결제내역</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochableBarcode}
          onPress={() => {
            navigation.navigate('BarcodeScanningPage');
          }}>
          <IconMaterial name="barcode-scan" size={40} color="rgb(218,41,28)" />
          <Text>QR/바코드</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            naviHandler('shoppingList');
            navigation.navigate('ShoppingListPage');
          }}>
          <IconAntD name="shoppingcart" size={33} color="rgb(91, 103, 112)" />
          <Text>장바구니</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            navigation.navigate('ImageScanningPage');
          }}>
          <IconFntAwesome
            name="user-circle"
            size={32}
            color="rgb(91, 103, 112)"
          />
          <Text>내정보</Text>
        </TouchableOpacity>
      </FooterTab>
    </Footer>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    marginTop: '1%',
    paddingLeft: '4%',
    paddingRight: '4%',
    borderTopWidth: 1,
    borderColor: 'rgb(226,226,226)',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tochablePosition: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tochableBarcode: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
