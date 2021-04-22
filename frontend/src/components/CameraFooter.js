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

export const CameraFooter = () => {
  return (
    <>
      <Footer>
        <FooterTab style={styles.footer}>
          <Text style={[styles.footerText, styles.footerText1]}>
            결제예정금액
          </Text>
          <Text style={[styles.footerText, {width: '50%'}]}>51,200원</Text>
          <Button style={styles.goToCartBtn}>
            <IconAntD name="shoppingcart" size={40} color="rgb(218, 41, 28)" />
          </Button>
          {/* <Button>
                <Text style={styles.footerText}>결제하기</Text>
              </Button> */}
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
});
