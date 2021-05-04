/* eslint-disable react-native/no-inline-styles */
import {Footer, FooterTab} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import IconFntAwesome from 'react-native-vector-icons/FontAwesome5';
import IconAntD from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppText from './AppText';

const MainFooter = ({navigation}) => {
  return (
    <Footer style={styles.footer}>
      <FooterTab style={styles.container}>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            navigation.navigate('MainPage');
          }}>
          <IconFntAwesome name="home" size={30} color="rgb(91, 103, 112)" />
          <AppText style={{color: 'rgb(91, 103, 112)', fontSize: 10}}>
            홈
          </AppText>
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
          <AppText style={{color: 'rgb(91, 103, 112)', fontSize: 10}}>
            결제내역
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochableBarcode}
          onPress={() => {
            navigation.navigate('BarcodeScanningPage');
          }}>
          <IconMaterial name="barcode-scan" size={40} color="rgb(218,41,28)" />
          <AppText
            style={{
              color: 'rgb(91, 103, 112)',
              fontSize: 10,
              fontFamily: 'NotoSansCJKkr-Regular',
            }}>
            QR/바코드
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tochablePosition}
          onPress={() => {
            navigation.navigate('ShoppingListPage');
          }}>
          <IconAntD name="shoppingcart" size={33} color="rgb(91, 103, 112)" />
          <AppText style={{color: 'rgb(91, 103, 112)', fontSize: 10}}>
            장바구니
          </AppText>
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
          <AppText style={{color: 'rgb(91, 103, 112)', fontSize: 10}}>
            내정보
          </AppText>
        </TouchableOpacity>
      </FooterTab>
    </Footer>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  footer: {
    height: 65,
    backgroundColor: 'white',
  },
  container: {
    height: '100%',
    width: '100%',
    marginTop: '1%',
    paddingLeft: '4%',
    paddingRight: '4%',
    borderTopWidth: 1,
    borderColor: 'rgb(226,226,226)',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tochablePosition: {
    width: '100%',
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
