/* eslint-disable react-native/no-inline-styles */
import {Container, ScrollableTab, Tab, Tabs} from 'native-base';
import React from 'react';
import HomeProduct from '../main/HomeProduct';
import EventProduct from '../main/EventProduct';
import PopularProduct from '../main/PopularProduct';
import VirtualizedView from '../common/VirtualizedView';

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
        locked={true}
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
          <VirtualizedView>
            <HomeProduct />
          </VirtualizedView>
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
          <VirtualizedView>
            <EventProduct />
          </VirtualizedView>
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
          <VirtualizedView>
            <PopularProduct />
          </VirtualizedView>
        </Tab>
      </Tabs>
    </Container>
  );
};
export default ProductListTab;
