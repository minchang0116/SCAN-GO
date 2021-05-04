import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';
import IconAntD from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export const CameraFooter = () => {
  const navigation = useNavigation();

  return (
    <>
      <Footer>
        <FooterTab style={styles.footer}>
          <Text style={[styles.footerText, styles.footerText1]}>
            결제예정금액
          </Text>
          <Text style={[styles.footerText, {width: '50%'}]}>51,200원</Text>
          <Button
            style={styles.goToCartBtn}
            onPress={() => {
              navigation.navigate('ShoppingListPage');
            }}>
            <IconAntD name="shoppingcart" size={40} color="rgb(218, 41, 28)" />
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'rgb(218, 41, 28)',
    height: '100%',
  },
  footerText: {
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    height: '100%',
    textAlignVertical: 'center',
  },
  footerText1: {
    fontSize: 18,
    marginLeft: 10,
    width: '30%',
    height: '100%',
    fontFamily: 'NotoSansCJKkr-Black',
  },
  goToCartBtn: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 0,
    height: '100%',
  },
});
