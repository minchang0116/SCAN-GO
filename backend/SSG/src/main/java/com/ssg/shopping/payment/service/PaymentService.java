package com.ssg.shopping.payment.service;

import com.ssg.shopping.payment.data.Response.CustomerPaymentResponse;
import org.springframework.transaction.annotation.Transactional;

public interface PaymentService {
    // 장바구니 조회
    @Transactional
    CustomerPaymentResponse getCustomerPayment(long memberId);
}
