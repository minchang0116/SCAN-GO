import {List, ListItem} from 'native-base';
import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

function MyModal({isModalVisible, toggleModal}) {
  return (
    <Modal
      isVisible={isModalVisible}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}>
      <View style={styles.view}>
        <List style={styles.list}>
          <ListItem>
            <Text>1</Text>
          </ListItem>
          <ListItem>
            <Text>2</Text>
          </ListItem>
          <ListItem>
            <Text>3</Text>
          </ListItem>
          <ListItem>
            <Text>4</Text>
          </ListItem>
          <ListItem>
            <Text>5</Text>
          </ListItem>
        </List>
        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: 'white',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MyModal;
