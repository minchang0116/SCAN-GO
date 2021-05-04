import client from './client';

export const requestPayment = formData => {
  return client.post('/payment/pay', formData);
};
