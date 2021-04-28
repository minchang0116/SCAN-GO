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

export const increaseItem = formData => {
  return 1;
  //   return client.post('/movie/review_update', formData);
};
export const decreaseItem = formData => {
  return 1;
  //   return client.post('/movie/review_update', formData);
};

export const readItems = formData => {
  return items;
  //   return client.get('/movie/review_list', {params: {...formData}});
};

const items = [{a: 'dfsgsd', b: 'sdf'}];

// export const insertCommentLike = (formData) => {
//   return client.post('/movie/review_like_insert', formData);
// };

// export const deleteCommentLike = (formData) => {
//   return client.delete('/movie/review_like_delete', {
//     params: { ...formData },
//   });
// };
