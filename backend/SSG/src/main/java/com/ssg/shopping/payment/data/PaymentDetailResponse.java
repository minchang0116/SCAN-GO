package com.ssg.shopping.payment.data;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class PaymentDetailResponse {
    private long id;
    private long prodId;
    private String prodCode;
    private String prodName;
    private String prodPrice;
    private long qty;

    public PaymentDetailResponse(PaymentDetail paymentDetail) {
        this.id = paymentDetail.getId();
        this.prodId = paymentDetail.getProduct().getId();
        this.prodCode = paymentDetail.getProduct().getProdCode();
        this.prodName = paymentDetail.getProduct().getProdName();
        this.prodPrice = paymentDetail.getProduct().getProdPrice();
        this.qty = paymentDetail.getQty();
    }
}
