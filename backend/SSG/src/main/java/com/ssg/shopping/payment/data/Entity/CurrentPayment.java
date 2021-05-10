package com.ssg.shopping.payment.data.Entity;

import com.ssg.member.data.Member;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "current_payment")
public class CurrentPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_id")
    private CustomerPayment customerPayment;

    public CurrentPayment() {}

    public CurrentPayment(Member member, CustomerPayment customerPayment) {
        this.member = member;
        this.customerPayment = customerPayment;
    }
}
