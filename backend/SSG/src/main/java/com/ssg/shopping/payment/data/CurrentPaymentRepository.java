package com.ssg.shopping.payment.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrentPaymentRepository extends JpaRepository<CurrentPayment, Long> {
    public CurrentPayment findByMemberId(long memberId);
}
