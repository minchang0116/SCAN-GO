import {Container, Header, ScrollableTab, Tab, Tabs} from 'native-base';
import React from 'react';
const ProductListTab = () => {
  return (
    <Tabs
      tabBarUnderlineStyle={{backgroundColor: 'black'}}
      tabBarBackgroundColor="white"
      renderTabBar={() => <ScrollableTab />}>
      <Tab
        activeTabStyle={{backgroundColor: 'white'}}
        activeTextStyle={{color: 'black', fontWeight: 'bold'}}
        textStyle={{color: 'black'}}
        tabStyle={{backgroundColor: 'white'}}
        heading="행사 상품"></Tab>
      <Tab
        activeTabStyle={{backgroundColor: 'white'}}
        activeTextStyle={{color: 'black', fontWeight: 'bold'}}
        textStyle={{color: 'black'}}
        tabStyle={{backgroundColor: 'white'}}
        heading="인기 상품"></Tab>
      <Tab
        activeTabStyle={{backgroundColor: 'white'}}
        activeTextStyle={{color: 'black', fontWeight: 'bold'}}
        textStyle={{color: 'black'}}
        tabStyle={{backgroundColor: 'white'}}
        heading="신상품"></Tab>
    </Tabs>
  );
};
export default ProductListTab;
