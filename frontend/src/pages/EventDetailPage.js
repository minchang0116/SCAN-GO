import {Container} from 'native-base';
import React from 'react';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import SubHeader from '../components/common/SubHeader';
const EventDetailPage = () => {
  const {img} = useSelector(({eventProductList}) => ({
    img: eventProductList.eventDetailImg,
  }));
  console.log(img);
  return (
    <>
      <SubHeader title="이벤트 정보" />
      <ScrollView>
        <Container>
          {img && (
            <Image
              source={{uri: img}}
              style={{width: '100%', height: '100%'}}></Image>
          )}
        </Container>
      </ScrollView>
    </>
  );
};
export default EventDetailPage;
