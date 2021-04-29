package com.ssg.shopping.payment.data.Response;

import com.ssg.shopping.payment.data.Entity.PaymentDetail;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class PaymentDetailResponse {
    private long prodId;
    private String prodCode;
    private String prodName;
    private String prodPrice;
    private long qty;

    public PaymentDetailResponse(PaymentDetail paymentDetail) {
        this.prodId = paymentDetail.getProduct().getId();
        this.prodCode = paymentDetail.getProduct().getProdCode();
        this.prodName = paymentDetail.getProduct().getProdName();
        this.prodPrice = paymentDetail.getProduct().getProdPrice();
        this.qty = paymentDetail.getQty();
    }
}
