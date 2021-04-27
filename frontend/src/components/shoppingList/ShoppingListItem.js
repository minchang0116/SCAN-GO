import {Body, Button, Left, ListItem, Right, Text, View} from 'native-base';
import React from 'react';
import {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MyModal from '../common/MyModal';

const ShoppingListItem = ({imgUrl, productName, productPrice, count}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  console.log('렌더링');
  return (
    <ListItem>
      <TouchableOpacity>
        <View style={styles.checkboxFalse} />
      </TouchableOpacity>
      <Left>
        <Image style={styles.left} source={imgUrl} />
      </Left>
      <Body style={styles.body}>
        <Text style={styles.bodyTextName} numberOfLines={2}>
          {productName}
        </Text>
        <Text style={styles.bodyTextPrice} numberOfLines={1}>
          {productPrice}
        </Text>
      </Body>
      <Right style={styles.right}>
        <TouchableOpacity>
          <Icon style={styles.cntIcon} name="minus" />
        </TouchableOpacity>
        <Text style={styles.cntText}>{count}</Text>
        <TouchableOpacity>
          <Icon style={styles.cntIcon} name="plus" />
        </TouchableOpacity>
      </Right>
      <MyModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </ListItem>
  );
};
const styles = StyleSheet.create({
  checkboxFalse: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: 'rgb(130,130,130)',
  },
  body: {
    flex: 5,
  },
  bodyTextName: {
    fontSize: 15,
  },
  bodyTextPrice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  left: {
    width: 60,
    height: 60,
  },
  right: {
    flex: 1,
    width: 50,
    height: 30,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cntIcon: {
    fontSize: 20,
  },
  cntText: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default ShoppingListItem;
