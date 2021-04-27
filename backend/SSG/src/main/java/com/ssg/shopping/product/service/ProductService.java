package com.ssg.shopping.product.service;

import com.ssg.shopping.payment.data.PaymentDetailResponse;
import org.springframework.transaction.annotation.Transactional;

public interface ProductService {
    // 바코드 찍어서 장바구니 내 상품 추가
    @Transactional
    PaymentDetailResponse getProduct(long memberId, String prodCode);

    // 장바구니 내 상품 개수 변경
    @Transactional
    void updateProduct(long memberId, long prodId, long qty);

    // 장바구니 내 상품 삭제
    @Transactional
    void deleteProduct(long memberId, long prodId);

    // 장바구니 내 상품 전체 삭제
    @Transactional
    void deleteAllProduct(long memberId);
}
