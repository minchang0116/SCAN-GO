import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppText from './AppText';
import {Container, List, ListItem, View} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as asyncStorage from '../../AsyncStorage/asyncStorage';

const MyInfo = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(async () => {
    let user = await asyncStorage.getObjectData('user');
    setUserInfo(user);
  }, []);

  const logout = async () => {
    await asyncStorage.removeValue('token');
    await asyncStorage.removeValue('user');
    alert('로그아웃이 완료됐습니다.');
    navigation.navigate('LoginPage');
  };

  return (
    <Container>
      <View style={styles.profile}>
        <View style={styles.profileLeft}>
          <AppText style={styles.nameText}>
            프론트파이팅{/* {userInfo.nickName} */}
            <AppText style={styles.profileText}>님</AppText>
          </AppText>

          <AppText style={styles.profileText}>안녕하세요</AppText>
        </View>
        <View style={styles.profileRight}>
          <Icon style={styles.profileIcon} name={'person'} />
        </View>
      </View>
      <View style={styles.body}>
        <View flexDirection={'row'}>
          <AppText style={styles.bodyText}>계정</AppText>
          <AppText style={styles.bodyText2} numberOfLines={1}>
            {userInfo.loginId}
          </AppText>
        </View>
        <View flexDirection={'row'}>
          <AppText style={styles.bodyText}>생일</AppText>
          <AppText style={styles.bodyText2} numberOfLines={1}>
            {userInfo.birth}
          </AppText>
        </View>
        <View flexDirection={'row'}>
          <AppText style={styles.bodyText}>전화번호</AppText>
          <AppText style={styles.bodyText2} numberOfLines={1}>
            {userInfo.phone}
          </AppText>
        </View>
      </View>
      <List>
        <ListItem style={styles.listItem} onPressOut={() => logout()}>
          <AppText>로그아웃</AppText>
          <Icon name={'arrow-forward-ios'} />
        </ListItem>
      </List>
    </Container>
  );
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
  },
  profileLeft: {flex: 2, justifyContent: 'center', marginLeft: 30},
  profileRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 90,
    color: 'white',
    backgroundColor: 'lightgrey',
    borderRadius: 100,
    marginRight: 30,
  },
  profileText: {fontSize: 30},
  nameText: {fontSize: 30, color: '#fcb326'},
  listItem: {
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 30,
  },
  body: {
    margin: 30,
  },
  bodyText: {
    marginBottom: 5,
    fontSize: 20,
    color: 'rgb(100,100,100)',
    width: 100,
  },
  bodyText2: {
    flex: 1,
  },
});
export default MyInfo;
