import client from './client';

// export const readComment = (formData) => {
//   return client.get('/movie/review_detail', { params: { ...formData } });
// };

export const insertItem = formData => {
  return 1;
  //   return client.post('/movie/review_insert', formData);
};
export const deleteItem = formData => {
  //   return client.delete('/movie/review_delete', {params: {...formData}});
};

export const updateItem = formData => {
  return 1;
  //   return client.post('/movie/review_update', formData);
};
export const decreaseItem = formData => {
  return 1;
  //   return client.post('/movie/review_update', formData);
};

export const readItems = formData => {
  setTimeout(() => {}, 5000);
  return items;
  //   return client.get('/movie/review_list', {params: {...formData}});
};

const items = [
  {
    prodId: 1,
    memberId: 'sdfsdf',
    isCheck: false,
    prodName: '랭거스)크랜베리페트449ml',
    prodPrice: '2800',
    imgUrl: require('../../../imgs/랭거스)크랜베리페트449ml.jpg'),
    qty: 1,
  },
  {
    prodId: 2,
    memberId: 'sdfsdf',
    isCheck: false,
    prodCode: '',
    prodName: '롯데)오늘의차황금보리500ml',
    prodPrice: '1500',
    imgUrl: require('../../../imgs/롯데)오늘의차황금보리500ml.jpg'),
    qty: 2,
  },
];

// export const insertCommentLike = (formData) => {
//   return client.post('/movie/review_like_insert', formData);
// };

// export const deleteCommentLike = (formData) => {
//   return client.delete('/movie/review_like_delete', {
//     params: { ...formData },
//   });
// };
