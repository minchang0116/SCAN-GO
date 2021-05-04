/* eslint-disable react-native/no-inline-styles */
import {Container, ScrollableTab, Tab, Tabs} from 'native-base';
import React from 'react';
import {ScrollView} from 'react-native';
import EventProduct from '../productList/EventProduct';

const ProductListTab = () => {
  const renderTabBar = props => {
    props.tabStyle = Object.create(props.tabStyle);
    return <ScrollableTab {...props} />;
  };
  return (
    <Container>
      <Tabs
        tabBarUnderlineStyle={{backgroundColor: 'rgb(240,41,28)'}}
        tabBarBackgroundColor="white"
        renderTabBar={renderTabBar}>
        <Tab
          activeTabStyle={{backgroundColor: 'white'}}
          activeTextStyle={{
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'NotoSansCJKkr-Regular',
          }}
          textStyle={{color: 'black', fontFamily: 'NotoSansCJKkr-Regular'}}
          tabStyle={{backgroundColor: 'white'}}
          heading="홈">
          <ScrollView>
            <EventProduct />
          </ScrollView>
        </Tab>
        <Tab
          activeTabStyle={{backgroundColor: 'white'}}
          activeTextStyle={{
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'NotoSansCJKkr-Regular',
          }}
          textStyle={{color: 'black', fontFamily: 'NotoSansCJKkr-Regular'}}
          tabStyle={{backgroundColor: 'white'}}
          heading="행사 상품">
          <ScrollView>
            <EventProduct />
          </ScrollView>
        </Tab>
        <Tab
          activeTabStyle={{backgroundColor: 'white'}}
          activeTextStyle={{
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'NotoSansCJKkr-Regular',
          }}
          textStyle={{color: 'black', fontFamily: 'NotoSansCJKkr-Regular'}}
          tabStyle={{backgroundColor: 'white'}}
          heading="인기 상품">
          <ScrollView>
            <EventProduct />
          </ScrollView>
        </Tab>
        <Tab
          activeTabStyle={{backgroundColor: 'white'}}
          activeTextStyle={{
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'NotoSansCJKkr-Regular',
          }}
          textStyle={{color: 'black', fontFamily: 'NotoSansCJKkr-Regular'}}
          tabStyle={{backgroundColor: 'white'}}
          heading="신상품">
          <ScrollView>
            <EventProduct />
          </ScrollView>
        </Tab>
      </Tabs>
    </Container>
  );
};
export default ProductListTab;
