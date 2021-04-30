import client from './client';

export const addItemByBarcode = ({formData}) => {
  return client.get('/product/product_insert', {params: {...formData}});
};
export const addItemByProductName = formData => {
  return item;
  //   return client.get('/movie/review_list', {params: {...formData}});
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

const item = {
  name: '페퍼리지팜)더블초코밀라노213g',
  price: '200000',
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
