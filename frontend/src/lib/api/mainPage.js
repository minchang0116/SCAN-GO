import client from './client';

export const readPlusOneProductList = formData => {
  return client.get('/event/get_plus', formData);
};

export const readSaleProductList = formData => {
  return client.get('/event/get_sale', formData);
};

export const readFreeGiftProductList = formData => {
  return client.get('/event/get_dum', formData);
};
