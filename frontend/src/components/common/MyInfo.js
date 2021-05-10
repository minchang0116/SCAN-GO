import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from './AppText';
import {Container, List, ListItem, View} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyInfo = () => {
  return (
    <Container>
      <View style={styles.profile}>
        <View style={styles.profileLeft}>
          <AppText style={styles.nameText}>
            강민창<AppText style={styles.profileText}>님</AppText>
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
            new0822@naver.com
          </AppText>
        </View>
        <View flexDirection={'row'}>
          <AppText style={styles.bodyText}>생일</AppText>
          <AppText style={styles.bodyText2} numberOfLines={1}>
            1995.01.16
          </AppText>
        </View>
        <View flexDirection={'row'}>
          <AppText style={styles.bodyText}>전화번호</AppText>
          <AppText style={styles.bodyText2} numberOfLines={1}>
            010-6889-5162
          </AppText>
        </View>
      </View>
      <List>
        <ListItem
          style={styles.listItem}
          onPressOut={() => alert('로그아웃이 완료됐습니다.')}>
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
