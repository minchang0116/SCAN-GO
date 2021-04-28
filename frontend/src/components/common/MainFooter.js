import {Button, Footer, FooterTab, Icon, Text} from 'native-base';
import React from 'react';

const MainFooter = ({navigation}) => {
  return (
    <Footer>
      <FooterTab>
        <Button
          vertical
          onPress={() => {
            navigation.navigate('BarcodeScanningPage');
          }}>
          <Icon name="apps" />
          <Text>Apps</Text>
        </Button>
        <Button
          vertical
          onPress={() => {
            navigation.navigate('ImageScanningPage');
          }}>
          <Icon name="camera" />
          <Text>Camera</Text>
        </Button>
        <Button
          vertical
          active
          onPress={() => {
            navigation.navigate('ShoppingListPage');
          }}>
          <Icon active name="navigate" />
          <Text>Navigate</Text>
        </Button>
        <Button
          vertical
          onPress={() => {
            navigation.navigate('PaymentList');
          }}>
          <Icon name="person" />
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default MainFooter;
