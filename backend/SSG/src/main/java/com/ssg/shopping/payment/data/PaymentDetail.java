package com.ssg.shopping.payment.data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.ssg.shopping.product.data.Product;

import lombok.Getter;

@Getter
@Entity
@Table(name = "payment_detail")
public class PaymentDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long qty;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prod_id")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_id")
    private CustomerPayment customerPayment;

    //public PaymentDetail() {}

    public PaymentDetail(Product product, CustomerPayment customerPayment) {
        this.product = product;
        this.customerPayment = customerPayment;
        this.qty = 1;
    }

    public void update(long qty) {
        this.qty = qty;
    }
}
